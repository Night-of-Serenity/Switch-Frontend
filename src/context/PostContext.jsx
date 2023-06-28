import { createContext, useContext } from "react";
import * as postService from "../api/post-api";

const PostContext = createContext(null);

function PostContextProvider({ children }) {
    // const createPost = async (input) => {
    //     const res = await postService.createPost(input);
    // };

    const values = {};

    return (
        <PostContext.Provider value={values}>{children}</PostContext.Provider>
    );
}

export default PostContextProvider;

export const usePost = () => {
    const ctx = useContext(PostContext);
    if (!ctx) {
        throw new Error("usePost must be used within a PostContextProvider");
    }
    return ctx;
};
