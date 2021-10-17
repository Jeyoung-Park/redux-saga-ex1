import React from "react";

const Post = ({ post }) => {
  const { title, body } = post;
  console.log("post in Post, ", post);
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
