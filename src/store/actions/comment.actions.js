import { ActionTypes } from "../types/post.types";

export const storeComment = (postId, comment) => {
  return {
    type: ActionTypes.STORE_COMMENT,
    payload: {
      postId,
      comment,
    },
  };
};
