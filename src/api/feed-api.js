import axios from "../config/axios";

export const fetchAllFeed = () => axios.get("/feed/fetchfeeduser");
export const fetchTrends = () => axios.get("/feed/fetchtrend");
