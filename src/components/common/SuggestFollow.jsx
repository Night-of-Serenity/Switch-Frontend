import React, { useState } from "react";
import { useFeed } from "../../context/FeedContext";

function SuggestFollow({ userSuggest }) {
    const { updateFollowing } = useFeed();
    const [isFollowing, setIsFollowing] = useState(false);

    const handleOnClickFollow = () => {
        updateFollowing(userSuggest.id);
        setIsFollowing(!isFollowing);
    };

    return (
        <div>
            <div className=" items-start   p-2 mt-2 mb-2  space-x-3 grid grid-cols-5">
                {/* <div> */}
                {/* <div className="flex flex-row"> */}
                <div className="items-center flex justify-center">
                    <img
                        src={userSuggest?.profileImageUrl}
                        alt=""
                        className="w-10 h-10 object-cover text-center rounded-full dark:bg-gray-500"
                    />
                </div>
                {/* <div className=" items-start p-2 mt-2 mb-2 space-x-4 justify-self-center flex ">
                <img
                    src={userSuggest?.profileImageUrl?userSuggest.profileImageUrl:"https://source.unsplash.com/100x100/?portrait"}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full dark:bg-gray-500"
                />
                <div className="w-64"> */}

                <div className=" col-span-3 ">
                    <div className="flex flex-row">
                        {/* <h2 className="text-sm font-semibold ">Leroy Jenkins &nbsp;</h2>   */}
                        <h2 className="text-base font-semibold ">
                            {userSuggest?.username}
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-sm font-light ">
                            {userSuggest?.bio}
                        </h2>
                    </div>
                    {/* </div> */}
                </div>
                {/* </div> */}
                <div className="flex justify-end items-end">
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

export default SuggestFollow;
