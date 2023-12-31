import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username)  {
      _id
      firstname
      lastname
      username
      email
      password
    }
  }
`;
