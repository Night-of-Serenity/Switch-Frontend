import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/common/Content";
import SuggestContent from "../Common/SuggestContent";
import Search from "../Common/Search";
import { useFeed } from "../context/FeedContext";
import { useParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
// import { PaperClipIcon } from "@heroicons/react/20/solid";

function TrendsByIdPage() {
    const { fetchPostsByTag, postByTag, trend } = useFeed();
    // console.log(postByTag[0]?.PostToTags[0]?.Tag?.tagName);
    // console.log(PostToTags[0]);
    const { tagId } = useParams();

    useEffect(() => {
        fetchPostsByTag(tagId);
    }, []);

    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
                <div>
                    <Sidebar />
                </div>
                <div className=" col-span-2 h-screen overflow-scroll">
                    <div className="py-4 pl-2 pb-1  border-b-2">
                        <h1 className="text-3xl font-bold ">Trend for you</h1>
                        <h1 className="font-medium text-lg">
                            #{postByTag[0]?.PostToTags[0]?.Tag?.tagName}
                        </h1>
                    </div>
                    {postByTag.map((el) => (
                        <Content feed={el} />
                    ))}
                </div>
                <div className="border-l-2">
                    <SearchBox />
                    <SuggestContent />
                </div>
            </div>
        </div>
    );
}

export default TrendsByIdPage;
