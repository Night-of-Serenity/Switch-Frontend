import React, { createContext, useContext, useState } from "react";
import * as feedService from "../api/feed-api";
import * as postService from "../api/post-api";

const FeedContext = createContext(null);

function FeedContextProvider({ children }) {
    const [feeds, setFeeds] = useState([]);
    const [file, setFile] = useState(null);
    const [post, setPost] = useState("");
    const [postByTag, setPostByTag] = useState([]);
    const [trends, setTrends] = useState([]);
    const [profile, setProfile] = useState([]);
    const [userSuggest, setUserSuggest] = useState([]);
    // const [following,setFollowing] = useState()
    const [mediaProfile, setMediaProfile] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowings] = useState([]);
    const [likes, setLikes] = useState([]);
    const [postDetail, setPostDetail] = useState({});

    const updateReSwitch = async (postId) => {
        // console.log(postId);
        await feedService.updateReSwitch(postId);
        fetchPostDetail(postId);
        fetchAll();
    };
    const updateReSwitchReply = async (replyId, postId) => {
        await feedService.updateReSwitchReply(replyId);
        fetchPostDetail(postId);
        fetchAll();
    };

    const updateLike = async (postId) => {
        await feedService.updateLike(postId);
        fetchPostDetail(postId);
        fetchAll();
    };
    const updateLikeReply = async (replyId, postId) => {
        await feedService.updateLikeReply(replyId);
        fetchPostDetail(postId);
        fetchAll();
    };
    const fetchAll = () => {
        fetchAllFeed();
        fetchUserProfile();
        fetchMediaProfile();
        fetchLikes();
    };

    const createReply = async (postId, input) => {
        await postService.createReply(postId, input);
        fetchPostDetail(postId);
        fetchAll();
    };

    const fetchPostDetail = async (postId) => {
        const res = await postService.fetchPostDetail(postId);
        setPostDetail(res.data);
    };

    // console.log(feeds);
    const fetchLikes = async () => {
        const res = await feedService.fetchLike();
        // console.log(res.data);
        setLikes(res.data);
    };

    const fetchFollowers = async () => {
        const res = await feedService.fetchUserDetail();
        // console.log(res);
        setFollowers(res.data.followers);
    };
    const fetchFollowings = async () => {
        const res = await feedService.fetchUserDetail();
        // console.log(res.data);
        setFollowings(res.data.followings);
    };

    const fetchPostsByTag = async (tagId) => {
        const res = await feedService.fetchPostsByTag(tagId);
        setPostByTag(res.data);
    };

    const fetchAllFeed = async () => {
        const res = await feedService.fetchAllFeed();
        setFeeds(res.data);
        // console.log(res.data);
    };

    const fetchTrends = async () => {
        const res = await feedService.fetchTrends();
        setTrends(res.data);
    };

    const createPost = async (input) => {
        await postService.createPost(input);
        fetchAllFeed();
        fetchTrends();
        fetchUserProfile();
    };

    const fetchUserProfile = async () => {
        const res = await feedService.fetchUserProfile();
        setProfile(res.data);
    };

    const fetchUserSuggest = async () => {
        const res = await feedService.fetchUserSuggest();
        setUserSuggest(res.data);
    };

    const updateFollowing = async (followingId) => {
        await feedService.updateFollowing(followingId);
    };

    const fetchMediaProfile = async () => {
        const res = await feedService.fetchMedia();
        setMediaProfile(res.data);
    };

    const fetchFeedGuest = async () => {
        const res = await feedService.fetchFeedGuest();
        setFeeds(res.data);
    };

    const values = {
        fetchAllFeed,
        feeds,
        fetchTrends,
        trends,
        createPost,
        file,
        setFile,
        post,
        setPost,
        fetchPostsByTag,
        postByTag,
        fetchUserProfile,
        profile,
        fetchUserSuggest,
        userSuggest,
        updateFollowing,
        fetchMediaProfile,
        mediaProfile,
        fetchFollowers,
        fetchFollowings,
        followers,
        followings,
        fetchLikes,
        likes,
        fetchPostDetail,
        postDetail,
        createReply,
        updateLike,
        updateLikeReply,
        updateReSwitchReply,
        updateReSwitch,
        fetchFeedGuest,
        fetchAll,
    };

    return (
        <FeedContext.Provider value={values}>{children}</FeedContext.Provider>
    );
}

export default FeedContextProvider;

export const useFeed = () => {
    const ctx = useContext(FeedContext);
    if (!ctx) {
        throw new Error("useFeed must be used within a FeedContextProvider");
    }
    return ctx;
};
