import axios from "../config/axios";

export const fetchAllFeed = () => axios.get("/feed/fetchfeeduser");
export const fetchTrends = () => axios.get("/feed/fetchtrend");
export const fetchPostsByTag = (tagId) =>
    axios.get(`/feed/fetchpostsbytag/${tagId}`);

export const fetchUserProfile = () => axios.get("/user/fetchuserprofile");