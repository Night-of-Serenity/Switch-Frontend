import axios from "../config/axios";

export const createPost = (input) => axios.post("/post/createpost", input);
export const editPost = (input) => axios.patch("/editpost/:postId", input);
