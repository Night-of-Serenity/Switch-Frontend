import axios from "../config/axios";

export const fetchAllFeed = () => axios.get("/feed/fetchfeeduser");
export const fetchTrends = () => axios.get("/feed/fetchtrend");
export const fetchUserSuggest = () => axios.get("/feed/fetchsuggestion");

export const fetchPostsByTag = (tagId) =>
    axios.get(`/feed/fetchpostsbytag/${tagId}`);

export const fetchUserProfile = () => axios.get("/user/fetchuserprofile");
export const updateFollowing = (followingId) =>
    axios.post(`/user/togglefollowing/${followingId}`);

export const fetchMedia = () => axios.get("/user/fetchMedia");

export const fetchFollowing = () => axios.get("/user/fetchfollowing");
export const fetchFollower = () => axios.get("/user/fetchfollower");
export const fetchLike = () => axios.get("/user/fetchuserlikes");
export const fetchUserDetail = () => axios.get("/user/fetchuserdetail");
