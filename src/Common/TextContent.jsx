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
    // console.log(feed);
    // console.log(feed.imgUrl || feed.imageUrl || null);
    const {
        updateLike,
        updateReSwitch,
        postDetail,
        updateReSwitchReply,
        updateLikeReply,
    } = useFeed();
    // const location = useLocation();

    const location = useLocation();

    const isPost = feed.postId ? false : true;

    return (
        <>
            <div>
                <h2 className="text-md font-light ">{feed.textcontent}</h2>
                {feed.imageUrl ? (
                    <img className="h-80 p-2 " src={feed.imageUrl} />
                ) : null}
            </div>

            {location.pathname === "/guest" ? (
                <div className="flex gap-20 flex-row mt-2">
                    <span className="flex flex-row">
                        <FaRegComment
                            className="cursor-pointer"
                            onClick={() => window.my_modal_login.showModal()}
                        />
                        <p className="text-sm ml-1 justify-start items-start">
                            {feed?.replyCount ? feed.replyCount : null}
                        </p>
                    </span>
                    <span className="flex flex-row">
                        <span onClick={() => window.my_modal_login.showModal()}>
                            <FaRetweet
                                className={`text-lg cursor-pointer ${
                                    feed?.isReswitched ? "text-green-600" : ""
                                }`}
                            />
                        </span>
                        <p className="text-sm ml-1 justify-start items-start">
                            {feed?.reswitchedCount
                                ? feed.reswitchedCount
                                : null}
                        </p>
                    </span>
                    <span className="flex flex-row">
                        <span onClick={() => window.my_modal_login.showModal()}>
                            {feed?.isLiked ? (
                                // ********รอชื่อจากBE
                                <FcLike className="cursor-pointer text-lg font-bold " />
                            ) : (
                                <GrFavorite className="cursor-pointer  " />
                            )}
                        </span>
                        <p className="text-sm ml-1 justify-start items-start">
                            {feed?.likedCount ? feed.likedCount : null}
                        </p>
                    </span>
                    {/* <FaRetweet className="text-lg cursor-pointer  " /> */}
                </div>
            ) : (
                <div className="flex gap-20 flex-row mt-2">
                    <span className="flex flex-row">
                        {/* <FaRegComment
                            className="cursor-pointer"
                            onClick={() => navigate(`/comment/${feed.id}`)}
                        /> */}
                        <FaRegComment
                            className="cursor-pointer"
                            onClick={() =>
                                navigate(
                                    `/comment/${isPost ? feed.id : feed.postId}`
                                )
                            }
                        />
                        <p className="text-sm ml-1 justify-start items-start">
                            {feed?.replyCount ? feed.replyCount : null}
                        </p>
                    </span>
                    <span className="flex flex-row">
                        <span
                            onClick={
                                isPost
                                    ? () => updateReSwitch(feed.id)
                                    : () =>
                                          updateReSwitchReply(
                                              feed.id,
                                              feed.postid
                                          )
                            }
                        >
                            <FaRetweet
                                className={`text-lg cursor-pointer ${
                                    feed?.isReswitched ? "text-green-600" : ""
                                }`}
                            />
                        </span>
                        <p className="text-sm ml-1 justify-start items-start">
                            {feed?.reswitchedCount
                                ? feed.reswitchedCount
                                : null}
                        </p>
                    </span>

                    {/* <FaRetweet className="text-lg cursor-pointer  " /> */}
                    <span className="flex flex-row">
                        <span
                            onClick={
                                isPost
                                    ? () => updateLike(feed.id)
                                    : () => updateLikeReply(feed.id, postId)
                            }
                        >
                            {feed?.isLiked ? (
                                // ********รอชื่อจากBE
                                <FcLike className="cursor-pointer text-lg font-bold " />
                            ) : (
                                <GrFavorite className="cursor-pointer  " />
                            )}
                        </span>
                        <p className="text-sm ml-1 justify-start items-start">
                            {feed?.likedCount ? feed.likedCount : null}
                        </p>
                    </span>
                </div>
            )}
        </>
    );
}

export default TextContent;
