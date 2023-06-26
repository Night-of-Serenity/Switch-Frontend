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

    console.log(feeds);

    const fetchPostsByTag = async (tagId) => {
        const res = await feedService.fetchPostsByTag(tagId);
        setPostByTag(res.data);
    };

    const fetchAllFeed = async () => {
        const res = await feedService.fetchAllFeed();
        setFeeds(res.data);
    };

    const fetchTrends = async () => {
        const res = await feedService.fetchTrends();
        setTrends(res.data);
    };

    const createPost = async (input) => {
        await postService.createPost(input);
        fetchAllFeed();
        fetchTrends();
    };

    const fetchUserProfile = async () => {
        const res = await feedService.fetchUserProfile();
        setProfile(res.data);
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
