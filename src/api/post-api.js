import axios from "../config/axios";

export const createPost = (input) => axios.post("/post/createpost", input);
export const fetchPostDetail = (postId) => axios.get(`/post/${postId}`);
export const createReply = (postId, input) =>
    axios.post(`/post/createreply/${postId}`, input);


    export const editPost = (input, postId) =>axios.patch(`/post/editpost/${postId}`, input);
export const deletePost = (postId) =>axios.delete(`/post/deletepost/${postId}`);