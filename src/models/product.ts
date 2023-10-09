import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "product image is required"],
    },
    amount: {
      type: Number,
      required: [true, "product price is required"],
    },
    currency: {
      type: String,
      required: [true, "product currency is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
