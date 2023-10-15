import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation (
    $name: String!
    $imageUrl: String!
    $amount: Int!
    $currency: String!
  ) {
    addProduct(
      name: $name
      imageUrl: $imageUrl
      amount: $amount
      currency: $currency
    ) {
      id
      response {
        message
        status
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation (
    $id: ID!
    $name: String!
    $imageUrl: String!
    $amount: Number!
    $currency: String!
  ) {
    updateProduct(
      id: $id
      name: $name
      imageUrl: $imageUrl
      amount: $amount
      currency: $currency
    ) {
      id
      response {
        message
        status
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation ($id: ID!) {
    deleteProduct(id: $id) {
      response {
        message
        status
      }
    }
  }
`;
