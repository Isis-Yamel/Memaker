import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:9000/';

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const MEME_FRAGMENT = gql`
  fragment MemeDetail on Meme {
    id
    image
    name
    memeText
  }
`;

export const MEMES_QUERY = gql`
  query MemesQuery {
    memes {
      ...MemeDetail
    }
  }
  ${MEME_FRAGMENT}
`;

export const MEME_QUERY = gql`
  query MemeQuery($id: ID!) {
    meme(id: $id) {
      ...MemeDetail
    }
  }
  ${MEME_FRAGMENT}
`;

export const CREATE_MEME_MUTATION = gql`
  mutation CreateMemeMutation($input: CreateMemeInput!) {
    meme: createMeme(input: $input) {
      ...MemeDetail
    }
  }
  ${MEME_FRAGMENT}
`;
