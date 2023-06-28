import axios from "../config/axios";

export const createPost = (input) => axios.post("/post/createpost", input);
export const editPost = (input) => axios.patch("/editpost/:postId", input);
export const fetchPostDetail = (postId) => axios.get(`/post/${postId}`);
export const createReply = (postId, input) =>
    axios.post(`/post/createreply/${postId}`, input);
