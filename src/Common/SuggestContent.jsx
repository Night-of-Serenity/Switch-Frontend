import React from "react";
import SuggestFollow from "../components/common/SuggestFollow";
import { useEffect } from "react";
import { useFeed } from "../context/FeedContext";

function SuggestContent() {
    const { fetchUserSuggest, userSuggest } = useFeed();
    useEffect(() => {
        fetchUserSuggest();
    }, []);
   
    return (
        <div>
            <div className=" p-2  ">
                <div className="border-2  rounded-xl  ">
                    <div className="border-b-2">
                        <h1 className="text-lg font-semibold p-2 ml-1 ">
                            Who to follow
                        </h1>
                    </div>
                    {/* <div className="overflow-y-scroll"> */}
                    {userSuggest.map((el) => (
                        <SuggestFollow key={el.id} userSuggest={el} />
                    ))}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default SuggestContent;
