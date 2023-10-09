import { GraphQLObjectType, GraphQLSchema } from "graphql";
import productQuesries from "./product/queries";
import ProductMutations from "./product/mutations";

const RootQueries = new GraphQLObjectType({
  name: "RootQueries",
  fields: {
    ...productQuesries,
  },
});

const RootMutations = new GraphQLObjectType({
  name: "RootMutations",
  fields: {
    ...ProductMutations,
  },
});

export default new GraphQLSchema({
  query: RootQueries,
  mutation: RootMutations,
});
