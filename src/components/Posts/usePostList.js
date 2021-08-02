import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Http } from "../../services/http";
import { storePosts } from "../../store/actions/post.actions";

const usePostList = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await Http.fetchPosts();
      dispatch(storePosts(response));
    };
    fetchPosts();
  }, [dispatch]);

  return { posts };
};

export default usePostList;
