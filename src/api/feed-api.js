import axios from "../config/axios";

export const fetchAllFeed = () => axios.get("/feed/fetchfeeduser");
export const fetchTrends = () => axios.get("/feed/fetchtrend");
export const fetchUserSuggest = () => axios.get("/feed/fetchsuggestion");

export const fetchPostsByTag = (tagId) =>
    axios.get(`/feed/fetchpostsbytag/${tagId}`);

export const fetchUserProfile = () => axios.get("/user/fetchuserprofile");
export const updateFollowing = (followingId) => {
    // console.log(followingId);
    return axios.post(`/user/togglefollowing/${followingId}`);
};

export const fetchMedia = () => axios.get("/user/fetchMedia");

export const fetchFollowing = () => axios.get("/user/fetchfollowing");
export const fetchFollower = () => axios.get("/user/fetchfollower");
export const fetchLike = () => axios.get("/user/fetchuserlikes");
export const fetchUserDetail = () => axios.get("/user/fetchuserdetail");
export const search = () => axios.get("/feed/search");

export const updateLike = (postId) => axios.post(`/post/postlike/${postId}`);
export const updateLikeReply = (replyId) =>
    axios.post(`/post/replylike/${replyId}`);

export const updateReSwitch = (postId) =>
    axios.post(`/post/togglereswitchpost/${postId}`);

export const updateReSwitchReply = (replyId) =>
    axios.post(`/post/togglereswitchreply/${replyId}`);
