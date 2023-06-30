import React, { useState } from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";
import TextContent from "../../Common/TextContent"
import EditContent from "../../Common/EditContent";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import * as postService from "../../api/post-api";
import { useFeed } from "../../context/FeedContext";

function Content({ feed, postId }) {
    // console.log({ feedImage: feed.imageUrl, feedId: feed.id });
    const { post, setPost, file, setFile, fetchUserProfile } = useFeed();

    const { user } = useAuth();
    // console.log(feed.textcontent, feed.id);

    // const isMyPost = feed.userId === user.id;

    const handleDelete = () => {
        postService.deletePost(feed.id);
        setPost(null);
        setFile(null);
        fetchUserProfile();
        navigate("/");
    };

    const navigate = useNavigate();
    const [isEdit, setIsEdit] = useState(false);

    let dateString = "";

    if (feed) {
        const date = new Date(feed.updatedAt);

        dateString = date.toLocaleString();
    }

    const location = useLocation();
    // console.log(location);

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
                    />
                    <div className=" w-11/12 ">
                        <div className="grid grid-cols-2 ">
                            <div className="flex flex-row">
                                <h2 className="text-lg font-semibold cursor-pointer ">
                                    {feed.User.username}
                                </h2>
                                <h2 className="text-md font-normal pl-2 ">
                                    {" "}
                                    {dateString}
                                </h2>
                            </div>
                            <div className="justify-self-end">
                                {/* **** */}
                                {(location.pathname === "/profile/switch" ||
                                    location.pathname === "/profile/media") &&
                                    isMyPost && (
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

                        {/* <TextContent /> */}
                        {isEdit ? (
                            <EditContent
                                postId={feed.id}
                                setIsEdit={setIsEdit}
                                feed={feed}
                            />
                        ) : (
                            <TextContent feed={feed} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Content;
