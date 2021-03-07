import gql from "graphql-tag";

export const GET_CURRENCIES = gql`
  query currency {
    currency
  }
`;
