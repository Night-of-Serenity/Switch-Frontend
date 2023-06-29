import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
// import { SlOptions } from "react-icons/sl";

import { useNavigate } from "react-router-dom";
import { useFeed } from "../context/FeedContext";
import { useLocation } from "react-router-dom";

function TextContent({ feed }) {
    const navigate = useNavigate();

    // console.log(feed.imgUrl || feed.imageUrl || null);
    const { updateLike, updateReSwitch } = useFeed();
    // const location = useLocation();

    return (
        <>
            <div>
                <h2 className="text-md font-light ">{feed.textcontent}</h2>
                {feed.imageUrl ? (
                    <img className="h-80 p-2 " src={feed.imageUrl} />
                ) : null}
            </div>
            <div className="flex gap-20 flex-row mt-2">
                <FaRegComment
                    className="cursor-pointer"
                    onClick={() => navigate(`/comment/${feed.id}`)}
                />
                <span onClick={() => updateReSwitch(feed.id)}>
                    <FaRetweet
                        className={`text-lg cursor-pointer ${
                            feed?.isReswitched ? "text-green-600" : ""
                        }`}
                    />
                </span>
                {/* <FaRetweet className="text-lg cursor-pointer  " /> */}
                <span onClick={() => updateLike(feed.id)}>
                    {feed?.isLiked ? (
                        // ********รอชื่อจากBE
                        <FcLike className="cursor-pointer text-lg font-bold " />
                    ) : (
                        <GrFavorite className="cursor-pointer  " />
                    )}
                </span>
            </div>
        </>
    );
}

export default TextContent;
