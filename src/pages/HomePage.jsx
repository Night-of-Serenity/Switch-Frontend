import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/common/Content";
import TrendsForYou from "../components/TrendsForYou";
import Search from "../Common/Search";
import { useAuth } from "../context/AuthContext";
import { useFeed } from "../context/FeedContext";

function HomePage() {
    const { fetchAllFeed, feeds } = useFeed();

    useEffect(() => {
        fetchAllFeed();
    }, []);

    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
                <div className="">
                    <Sidebar />
                </div>
                <div className="col-span-2 h-screen overflow-scroll  ">
                    <div>
                        <h1 className="text-3xl font-bold my-4 pl-2 pb-1  border-b-2">
                            Home
                        </h1>
                    </div>
                    <div>
                        {feeds.map((el) => (
                            <Content key={el.id} feed={el} />
                        ))}

                        {/* <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content /> */}
                    </div>
                </div>
                <div className="border-l-2">
                    {/* <div className="form-control pt-2 pr-2 pl-2">
            <input
              type="text"
              placeholder="Search"
              className="input border-2 input-bordered w-full rounded-full md:w-auto"
            />
          </div> */}
                    <Search />

                    <TrendsForYou />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
