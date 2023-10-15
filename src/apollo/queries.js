import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  {
    allProducts {
      id
      name
      imageUrl
      amount
      currency
      createdAt
      response {
        status
        message
      }
    }
  }
`;
