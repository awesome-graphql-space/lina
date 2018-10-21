/*import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver, GraphQLString } from 'graphql';

export default class DeferDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;

    field.resolve = async function(
      source,
      { format, ...otherArgs },
      context,
      info,
    ) {
      const date = await resolve.call(this, source, otherArgs, context, info);
      // If a format argument was not provided, default to the optional
      // defaultFormat argument taken by the @date directive:
      return formatDate(date, format || defaultFormat);
    };

    field.type = GraphQLString;
  }
}*/
