import axios from "../config/axios";

export const fetchAllFeed = () => axios.get("/feed/fetchfeeduser");
