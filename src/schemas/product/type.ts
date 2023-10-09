import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from "graphql";
import { ResponseType, DateScalarType } from "../types";

const ProductType: GraphQLObjectType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    amount: { type: GraphQLInt },
    currency: { type: GraphQLString },
    response: { type: ResponseType },
    createdAt: { type: DateScalarType },
  }),
});

export default ProductType;
