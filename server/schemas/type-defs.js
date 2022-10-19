import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Meme {
    id: ID!
    image: String!
    name: String!
    memeText: String
  }

	type Query {
    meme(id: ID!): Meme
		memes: [Meme!]!
	}
`;