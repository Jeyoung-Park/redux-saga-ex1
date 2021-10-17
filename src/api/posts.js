import axios from "axios";

/*
  package.json에 proxy 설정을 통한 CORS 설정
  http://localhost:4000/posts 대신에 /posts URL 로 요청 -> http://localhost:3000
*/
export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  console.log('getPostById result, ', response)
  return response.data;
};
