import axios from "../config/axios";

export const fetchMe = () => axios.get("/auth/fetchme");
export const register = (input) => axios.post("/auth/register", input);
export const login = (input) => axios.post("/auth/login", input);
