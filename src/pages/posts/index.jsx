import Head from "next/head";
import { PostList } from "src/components/Post/PostList";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <PostList />
    </div>
  );
};

export default Posts;
