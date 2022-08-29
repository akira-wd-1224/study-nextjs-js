import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { API_URL } from "src/utils/const";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `${API_URL}/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by {data.name}</div>;
};
