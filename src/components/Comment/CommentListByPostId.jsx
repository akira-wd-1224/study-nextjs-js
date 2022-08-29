import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentListByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts/${props.id}/comments` : null
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ul className=" space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link href={`/comments/${comment.id}`}>
              <a className="block hover:text-blue-500">{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
