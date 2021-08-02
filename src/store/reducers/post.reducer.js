import { ActionTypes } from "../types/post.types";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.STORE_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case ActionTypes.STORE_COMMENT:
      const index = state.posts.findIndex((post) => post.id === payload.postId);
      state.posts[index].comments.push({
        postId: payload.postId,
        id: payload.postId,
        name: "You",
        email: "youremail@mail.com",
        body: payload.comment,
      });

      return {
        ...state,
        posts: [...state.posts],
      };
    default:
      return state;
  }
};
