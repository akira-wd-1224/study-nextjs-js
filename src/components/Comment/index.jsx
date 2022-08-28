import { PostByCommentId } from "src/components/Post/PostByCommentId";
import { useComment } from "src/hooks/useComment";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div className="text-lg">
        {data.name}({data.email})
      </div>
      <h1 className="text-3xl font-bold ">{data.body}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
      <PostByCommentId id={data.postId} />
      </div>
    </div>
  );
};
