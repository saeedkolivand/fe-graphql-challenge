import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
    }
  }
`;

export const GET_COUNTRIES_BY_CODE = gql`
  query GetCountryByCode($code: String) {
    #    countries(filter: { code: { in: $code } }) {
    #    countries(filter: { code: { eq: $code } }) {
    countries(filter: { code: { regex: $code } }) {
      name
      code
    }
  }
`;
