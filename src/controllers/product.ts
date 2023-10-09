import Product from "../models/product";

class ProductController {
  // Add New Product to Database
  async addProduct(args: any) {
    try {
      const product = new Product({
        name: args.name,
        imageUrl: args.imageUrl,
        amount: args.amount,
        currency: args.currency,
      });
      product.save().then(() => {
        return {
          response: {
            status: "success",
            message: "product created",
          },
        };
      });
    } catch (error: any) {
      return {
        response: {
          status: "error",
          message: "error creating product",
        },
      };
    }
  }

  // Get All Products From Database
  async allProducts() {
    try {
      return await Product.find({});
    } catch (error: any) {
      return {
        response: {
          status: "success",
          message: "operation failed",
        },
      };
    }
  }

  // Update A Single Product Based On Product ID
  async updateProduct(args: any) {
    try {
      const res = await Product.updateOne(
        { _id: args.id },
        {
          $set: {
            name: args.name,
            imageUrl: args.imageUrl,
            amount: args.amount,
            currency: args.currency,
          },
        }
      );
      if (res.acknowledged) {
        return {
          response: {
            status: "success",
            message: "product updated successfully !!",
          },
        };
      }
    } catch (error: any) {
      return {
        response: {
          status: "error",
          message: "error updating product",
        },
      };
    }
  }

  // Delete Product From Database Based On Product ID
  async deleteProduct(args: any) {
    try {
      const response = await Product.deleteOne({ _id: args.id });
      if (response.deletedCount > 0) {
        return {
          response: {
            status: "success",
            message: "product deleted",
          },
        };
      } else {
        return {
          response: {
            status: "error",
            message: "product not found",
          },
        };
      }
    } catch (error: any) {
      return {
        response: {
          status: "error",
          message: "error deleting product",
        },
      };
    }
  }
}

export default ProductController;
