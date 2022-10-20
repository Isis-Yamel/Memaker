import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:9000/';

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const MEMES_QUERY = gql`
  query MemesQuery {
    memes {
      id
      image
      name
      memeText
    }
  }
`;
