import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeComment } from "../../store/actions/comment.actions";

const usePost = (props) => {
  const { post } = props;
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(storeComment(+post.id, comment));
    setComment("");
  };

  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  return {
    post,
    comment,
    handleSubmit,
    handleChange,
  };
};

export default usePost;
