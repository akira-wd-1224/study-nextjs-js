import useSWR from "swr";

export const useComments = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
