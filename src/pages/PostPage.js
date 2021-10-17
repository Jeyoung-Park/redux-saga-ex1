import React from "react";
import PostContainer from "../containers/PostContainer";

const PostPage = ({ match }) => {
  // url 파라미터 조회하기
  const { id } = match.params;

  // url 파라미터 값은 문자열이므로 정수형으로 변환
  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;
