import React from "react";
import SuggestFollow from "../components/common/SuggestFollow";
import { useEffect } from "react";
import { useFeed } from "../context/FeedContext";

function SuggestContent() {
    const { fetchUserSuggest, userSuggest } = useFeed();
    useEffect(() => {
        fetchUserSuggest();
    }, []);
    console.log(userSuggest);
    return (
        <div>
            <div className=" p-4 ">
                <div className="border-2  rounded-xl ">
                    <div className="border-b-2">
                        <h1 className="text-xl font-semibold p-2 ml-1 ">
                            Who to follow
                        </h1>
                    </div>
                    {userSuggest.map((el) => (
                        <SuggestFollow userSuggest={el} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SuggestContent;
