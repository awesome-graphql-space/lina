import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { GraphQLSchema, GraphQLDirective, DirectiveLocation, GraphQLEnumType, defaultFieldResolver } from 'graphql';

export default class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    this.ensureFieldsWrapped(type);
    type._requiredAuthRole = this.args.requires;
  }
  // Visitor methods for nested types like fields and arguments
  // also receive a details object that provides information about
  // the parent and grandparent types.
  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType);
    field._requiredAuthRole = this.args.requires;
  }

  ensureFieldsWrapped(objectType) {
    // Mark the GraphQLObjectType object to avoid re-wrapping:
    if (objectType._authFieldsWrapped) return;
    objectType._authFieldsWrapped = true;

    const fields = objectType.getFields();

    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;
      field.resolve = async function(...args) {
        // Get the required Role from the field first, falling back
        // to the objectType if no Role is required by the field:
        const requiredRole =
          field._requiredAuthRole ||
          objectType._requiredAuthRole;

        if (! requiredRole) {
          return resolve.apply(this, args);
        }

        const context = args[2];
        const user = await getUser(context.headers.authToken);
        if (! user.hasRole(requiredRole)) {
          throw new Error('not authorized');
        }

        return resolve.apply(this, args);
      };
    });
  }

  public static getDirectiveDeclaration(
    directiveName: string,
    schema: GraphQLSchema,
  ): GraphQLDirective {
    const previousDirective = schema.getDirective(directiveName);
    if (previousDirective) {
      // If a previous directive declaration exists in the schema, it may be
      // better to modify it than to return a new GraphQLDirective object.
      previousDirective.args.forEach(arg => {
        if (arg.name === 'requires') {
          // Lower the default minimum Role from ADMIN to REVIEWER.
          arg.defaultValue = 'REVIEWER';
        }
      });

      return previousDirective;
    }

    // If a previous directive with this name was not found in the schema,
    // there are several options:
    //
    // 1. Construct a new GraphQLDirective (see below).
    // 2. Throw an exception to force the client to declare the directive.
    // 3. Return null, and forget about declaring this directive.
    //
    // All three are valid options, since the visitor will still work without
    // any declared directives. In fact, unless you're publishing a directive
    // implementation for public consumption, you can probably just ignore
    // getDirectiveDeclaration altogether.

    return new GraphQLDirective({
      name: directiveName,
      locations: [
        DirectiveLocation.OBJECT,
        DirectiveLocation.FIELD_DEFINITION,
      ],
      args: {
        requires: {
          // Having the schema available here is important for obtaining
          // references to existing type objects, such as the Role enum.
          type: (schema.getType('Role') as GraphQLEnumType),
          // Set the default minimum Role to REVIEWER.
          defaultValue: 'GUEST',
        },
      },
    });
  }
}