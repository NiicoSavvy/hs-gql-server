import { gql } from 'apollo-server-express';

import Root from '../root';

const User = gql`
  extend type Query {
    me: User
    user(id: ID!): User
  }

  type User {
    id: ID!
    avatarUrl: String
    email: String!
    name: String @deprecated
    username: String!
  }
`;

export default () => [User, Root];
