import { gql } from 'apollo-server-express';

const Root = gql`
  #directive @auth on FIELD_DEFINITION
  #directive @guest on FIELD_DEFINITION

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Meta {
    count: Int
  }

  scalar Url
  scalar Date
`;

export default () => [Root];
