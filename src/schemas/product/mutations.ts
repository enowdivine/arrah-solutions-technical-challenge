import { GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt } from "graphql";
import ProductType from "./type";
import ProductController from "../../controllers/product";

const product = new ProductController();

const ProductMutations = {
  addProduct: {
    type: ProductType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      imageUrl: { type: new GraphQLNonNull(GraphQLString) },
      amount: { type: new GraphQLNonNull(GraphQLInt) },
      current: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(args: any) {
      return await product.addProduct(args);
    },
  },

  updateProduct: {
    type: ProductType,
    args: {
      id: { type: GraphQLID },
      name: { type: new GraphQLNonNull(GraphQLString) },
      imageUrl: { type: new GraphQLNonNull(GraphQLString) },
      amount: { type: new GraphQLNonNull(GraphQLInt) },
      current: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(args: any) {
      return await product.updateProduct(args);
    },
  },

  deleteProduct: {
    type: ProductType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(args: any) {
      return await product.deleteProduct(args);
    },
  },
};

export default ProductMutations;
