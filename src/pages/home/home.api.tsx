import { gql } from "@apollo/client";

export const GET_COUNTRIES_BY_CODE = gql`
  query GetCountryByCode($code: String) {
    countries(filter: { code: { regex: $code } }) {
      name
      code
    }
  }
`;
