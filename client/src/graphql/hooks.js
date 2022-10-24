import { useQuery, useMutation } from '@apollo/client';
import { CREATE_MEME_MUTATION, MEMES_QUERY, MEME_QUERY } from './queries';

export function useMeme(id) {
  const { data, loading, error } = useQuery(MEME_QUERY, {
    variables: { id },
  });
  return {
    meme: data?.meme,
    mloading: loading,
    merror: Boolean(error),
  };
}

export function useMemes() {
  const { data, loading, error } = useQuery(MEMES_QUERY, {
    fetchPolicy: 'network-only',
  });
  return {
    memes: data?.memes,
    loading,
    error: Boolean(error),
  };
}

export function useCreateMeme() {
  const [mutate, { loading, error }] = useMutation(CREATE_MEME_MUTATION);
  return {
    createMeme: async (name, image) => {
      const { data: { meme } } = await mutate({
        variables: { input: { name, image } },
        update: (cache, { data: { meme } }) => {
          cache.writeQuery({
            query: MEME_QUERY,
            variables: { id: meme.id },
            data: { meme },
          });
        },
      });
      return meme;
    },
    loading,
    error: Boolean(error),
  };
}