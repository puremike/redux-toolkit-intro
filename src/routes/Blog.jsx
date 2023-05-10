import React from "react";
import AddPostForm from "../features/posts/AddPostForm";
import PostsList from "../features/posts/PostsList";

const Blog = () => {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  );
};

export default Blog;
