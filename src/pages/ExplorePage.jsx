import React from "react";
import Sidebar from "../components/Sidebar";
import TrendsForYou from "../components/TrendsForYou";
import SuggestFollow from "../components/common/SuggestFollow";
import SuggestContent from "../Common/SuggestContent";
import SearchBox from "../components/SearchBox";
function ExplorePage() {
    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll">
                <div>
                    <Sidebar />
                </div>
                <div className="col-span-2 border-r-2">
                    {/* <div className="text-3xl font-bold my-4 pl-2 pb-2  border-b-2">
                        <div className="form-control pt-2 pr-2 pl-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input border-2 input-bordered w-full rounded-full md:w-auto"
                            />
                        </div>
                    </div> */}
                    <SearchBox />
                    <TrendsForYou />
                </div>
                <SuggestContent />
            </div>
        </div>
    );
}

export default ExplorePage;
