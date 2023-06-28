import React, { useState } from "react";
import { useFeed } from "../../context/FeedContext";

function FollowItem({ content }) {
    const { updateFollowing } = useFeed();
    const [isFollowing, setIsFollowing] = useState(content.isFollowing);

    const handleOnClickFollow = () => {
        updateFollowing(content.id);
        setIsFollowing(!isFollowing);
    };

    return (
        <div className="grid grid-cols-5">
            <div className="p-4">
                <div className=" items-center justify-center flex">
                    <img
                        src={content?.profileImageUrl}
                        alt=""
                        className="w-16 h-16 object-cover text-center rounded-full dark:bg-gray-500"
                    />
                </div>
            </div>
            <div className="col-span-3 p-6">
                <div className="text-lg font-bold">{content?.username}</div>
                <div>{content?.bio}</div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    {/* <button className=" border-2 border-Primary  rounded-full px-3 py-1 text-Primary font-normal">
                        Following
                    </button> */}
                    {!isFollowing ? (
                        <div className=" bg-Primary border-2 border-Primary  rounded-full px-3 py-1 text-white font-normal">
                            <button onClick={() => handleOnClickFollow()}>
                                Follow
                            </button>
                        </div>
                    ) : (
                        <div className=" border-2 border-Primary rounded-full px-3 py-1 text-Primary font-normal">
                            <button onClick={() => handleOnClickFollow()}>
                                Following
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FollowItem;
