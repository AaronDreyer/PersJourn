const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        username: String!
        email: String!
        password: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allUsers: [User]
        userById(userId: ID!): User  
    }

    type Mutation {
        addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;