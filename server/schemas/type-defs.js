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

  input CreateMemeInput {
    image: String!
    name: String!
    memeText: String
  }

  input UpdateMemeInput {
    id: ID!
    image: String!
    name: String!
    memeText: String
  }

  type Mutation {
    createMeme(input: CreateMemeInput!): Meme
    deleteMeme(id: ID!): Meme
    updateMeme(input: UpdateMemeInput!): Meme
  }
`;