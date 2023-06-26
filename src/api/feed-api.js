import axios from "../config/axios";

export const fetchAllFeed = () => axios.get("/feed/fetchfeeduser");
export const fetchTrends = () => axios.get("/feed/fetchtrend");
export const fetchUserSuggest = () => axios.get("/feed/fetchsuggestion");

export const fetchPostsByTag = (tagId) =>
    axios.get(`/feed/fetchpostsbytag/${tagId}`);

export const fetchUserProfile = () => axios.get("/user/fetchuserprofile");
export const updateFollowing = (followingId) =>
    axios.post(`/user/togglefollowing/${followingId}`);
