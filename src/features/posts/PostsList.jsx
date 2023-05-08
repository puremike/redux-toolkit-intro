import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./posts.css";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  return <div></div>;
};

export default PostsList;
