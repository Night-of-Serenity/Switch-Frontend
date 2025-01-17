import React, { useState } from "react";
// import { FaRegComment, FaRetweet } from "react-icons/fa";
// import { FcLike } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";
// import TextContent from "../../Common/TextContent";
// import EditContent from "../../Common/EditContent";
// import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import * as postService from "../../api/post-api";
import { useFeed } from "../../context/FeedContext";
import TextReplyContent from "../../Common/TextReplyContent";
import { useAuth } from "../../context/AuthContext";

function ReplyContent({ feed, postId }) {
    const {
        post,
        setPost,
        file,
        setFile,
        fetchotheruserdetail,
        fetchSwitchOtherUser,
    } = useFeed();
    const { user } = useAuth();
    const handleDelete = (e) => {
        e.preventDefault();
        // console.log("testtt", post, postId);
        postService.deletePost(postId, post);
        setPost(null);
        setFile(null);
    };

    const navigate = useNavigate();
    // console.log(feed);
    const [isEdit, setIsEdit] = useState(false);

    let dateString = "";

    if (feed) {
        const date = new Date(feed.updatedAt);

        dateString = date.toLocaleString();
    }

    const location = useLocation();
    // console.log(location);

    const isMe = feed.userId === user.id;
    // console.log(isMe);
    const handleClickProfile = async () => {
        await fetchSwitchOtherUser(feed.userId);
        await fetchotheruserdetail(feed.userId);
        navigate(isMe ? "/profile/switch" : `/friend/${feed.userId}`);
    };
    return (
        <>
            {!feed ? null : (
                <div className="flex items-start p-2  mt-2 mb-2 space-x-4 justify-self-end border-b-2 ">
                    <img
                        src={
                            feed.User.profileImageUrl
                                ? feed.User.profileImageUrl
                                : "https://source.unsplash.com/100x100/?portrait"
                        }
                        alt=""
                        className="w-12 h-12 object-cover rounded-full dark:bg-gray-500 cursor-pointer"
                        onClick={() => {
                            handleClickProfile();
                        }}
                    />
                    <div className=" w-11/12 ">
                        <div className="grid grid-cols-2 ">
                            <div className="flex flex-row">
                                <h2
                                    className="text-lg font-semibold cursor-pointer "
                                    onClick={() => {
                                        handleClickProfile();
                                    }}
                                >
                                    {feed.User.username}
                                </h2>
                                <h2 className="text-md pt-1 font-normal pl-2 ">
                                    {" "}
                                    {dateString}
                                </h2>
                            </div>
                            <div className="justify-self-end">
                                {/* **** */}
                                {(location.pathname === "/profile/switch" ||
                                    location.pathname === "/profile/media") && (
                                    <div className="dropdown dropdown-end px-4">
                                        <label
                                            tabIndex={0}
                                            className="cursor-pointer "
                                        >
                                            <SlOptions />
                                        </label>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-20"
                                        >
                                            <li>
                                                <a
                                                    onClick={() =>
                                                        setIsEdit(true)
                                                    }
                                                >
                                                    Edit
                                                </a>
                                            </li>
                                            <li>
                                                <div
                                                    id="postId"
                                                    name="postId"
                                                    defaultValue={postId}
                                                    onClick={handleDelete}
                                                    // onClick={() =>
                                                    //     window.my_modal_Delete.showModal()
                                                    // }
                                                >
                                                    Delete
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {/* **** */}
                            </div>
                        </div>

                        <TextReplyContent feed={feed} />
                    </div>
                </div>
            )}
        </>
    );
}

export default ReplyContent;
