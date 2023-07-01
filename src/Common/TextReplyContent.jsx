import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";

import { useNavigate } from "react-router-dom";
import { useFeed } from "../context/FeedContext";

function TextReplyContent({ feed }) {
    const navigate = useNavigate();

    // console.log(feed.imgUrl || feed.imageUrl || null);
    const { updateLikeReply, updateReSwitchReply } = useFeed();

    return (
        <>
            <div>
                <h2 className="text-lg font-light ">{feed.textcontent}</h2>
                {feed.imgUrl || feed.imageUrl ? (
                    <img
                        className="h-80 p-2 "
                        src={feed.imgUrl || feed.imageUrl}
                    />
                ) : null}
            </div>
            <div className="flex gap-20 flex-row mt-2">
                {/* <FaRegComment
                    className="cursor-pointer"
                    onClick={() => navigate(`/comment/${feed.id}`)}
                /> */}
                <span className="flex flex-row">
                    <span
                        onClick={() =>
                            updateReSwitchReply(feed.id, feed.postId)
                        }
                    >
                        <FaRetweet
                            className={`text-lg cursor-pointer ${
                                feed?.isReswitched ? "text-green-600" : ""
                            } `}
                        />
                    </span>
                    <p className="text-sm ml-1 justify-start items-start">
                        {feed?.reswitchedCount ? feed.reswitchedCount : null}
                    </p>
                </span>
                <span className="flex flex-row">
                    <span onClick={() => updateLikeReply(feed.id, feed.postId)}>
                        {feed?.isLiked ? (
                            // ********รอชื่อจากBE
                            <FcLike className="cursor-pointer text-lg font-bold" />
                        ) : (
                            <GrFavorite className="cursor-pointer  " />
                        )}
                    </span>
                    <p className="text-sm ml-1 justify-start items-start">
                        {feed?.likedCount ? feed.likedCount : null}
                    </p>
                </span>
            </div>
        </>
    );
}

export default TextReplyContent;
