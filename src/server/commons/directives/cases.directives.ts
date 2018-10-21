import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';

export class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

export class LowerCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toLowerCase();
      }
      return result;
    };
  }
}

export class CapitalizeDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      let result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        result = result.toLowerCase();
        return result.replace(/^\w/, c => c.toUpperCase());
      }
      return result;
    };
  }
}