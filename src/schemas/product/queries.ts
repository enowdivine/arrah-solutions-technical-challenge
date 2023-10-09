import { GraphQLList } from "graphql";
import ProductType from "./type";
import ProductController from "../../controllers/product";

const product = new ProductController();

const productQuesries = {
  allProducts: {
    type: new GraphQLList(ProductType),
    async resolve() {
      return await product.allProducts();
    },
  },
};

export default productQuesries;
