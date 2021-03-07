import gql from "graphql-tag";

export const GETPRODUCTS = gql`
  query products($currency: Currency!) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;
