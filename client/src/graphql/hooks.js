import { useQuery } from '@apollo/client';
import { MEMES_QUERY } from './queries';

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