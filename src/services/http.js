import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const getAllPosts = async () => axios.get(`${URL}/posts`);
const getAllComments = async () => axios.get(`${URL}/comments`);

const fetchPosts = async () => {
  const [resPosts, resComments] = await Promise.all([
    getAllPosts(),
    getAllComments(),
  ]);

  return resPosts.data.map((post) => ({
    ...post,
    comments: resComments.data.filter((comment) => comment.postId === post.id),
  }));
};

export const Http = {
  fetchPosts,
};
