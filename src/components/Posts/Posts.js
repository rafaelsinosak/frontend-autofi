import { useCallback } from "react";
import PostsIndividual from "./PostsIndividual/PostsIndividual";
import usePostList from "../Posts/usePostList";

const Posts = (props) => {
  const { posts } = usePostList(props);

  const renderPost = useCallback(
    (post) => <PostsIndividual key={+post.id} post={post} />,
    []
  );

  return posts.map(renderPost);
};

export default Posts;
