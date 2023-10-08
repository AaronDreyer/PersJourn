import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;



export const ADD_USER = gql`
mutation Mutation($firstname: String!, $lastname: String!, $username: String!, $email: String!, $password: String!) {
  addUser(firstname: $firstname, lastname: $lastname, username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      firstname
      lastname
      password
      username
    }
  }
}
`;