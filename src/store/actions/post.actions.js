import { ActionTypes } from "../types/post.types";

export const storePosts = (posts) => {
  return {
    type: ActionTypes.STORE_POSTS,
    payload: posts,
  };
};
