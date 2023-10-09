import { GraphQLObjectType, GraphQLString, GraphQLScalarType } from "graphql";

export const ResponseType: GraphQLObjectType = new GraphQLObjectType({
  name: "ResponseType",
  fields: () => ({
    status: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});

export const DateScalarType = new GraphQLScalarType({
  name: "Date",
  parseValue(value: any) {
    return new Date(value);
  },
  serialize(value: any) {
    return value.toISOString();
  },
});
