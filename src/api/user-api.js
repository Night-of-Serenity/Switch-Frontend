import axios from "../config/axios";

export const editProfile = (input) => axios.patch("/user/editprofile", input);
