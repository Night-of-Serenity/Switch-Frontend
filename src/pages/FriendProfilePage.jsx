import React from "react";
import Sidebar from "../components/Sidebar";
import logoCover from "../images/Cover.png";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import Content from "../components/common/Content";
import SuggestContent from "../Common/SuggestContent";
import Search from "../Common/Search";

const stats = [
    { id: 1, name: "Switch", value: "88.2k" },
    { id: 2, name: "Follower", value: "100k" },
    { id: 3, name: "Following", value: "0" },
];
function FriendProfilePage() {
    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
                <div>
                    <Sidebar />
                </div>
                <div className=" col-span-2 h-screen overflow-scroll">
                    <div>
                        <h1 className="text-3xl font-bold py-4 pl-2 pb-1  border-b-2">
                            @Username mockup
                        </h1>
                    </div>
                    <div className="flex items-center bg-Primary opacity-90 justify-center border-b-2 pb-4">
                        <img src={logoCover} className="w-2/5  "></img>
                    </div>
                    <div className="grid grid-cols-4 border-b-2 py-2 ">
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src="https://source.unsplash.com/100x100/?portrait"
                                alt=""
                                className="w-36 h-36 rounded-full dark:bg-gray-500  "
                            />
                            <div className=" text-base font-extrabold pt-4 ">
                                Switch
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-xl font-semibold mx-1 text-slate-600">
                                @Username mockup
                            </h1>
                            <h1 className="flex flex-row text-slate-500">
                                <BsFillCalendar2HeartFill className="text-sm my-1 mx-1" />
                                Mockup Join (created at)
                            </h1>
                            <div>
                                {/* ****************** */}
                                <div className="bg-white ">
                                    <div className=" py-2">
                                        <div className=" lg:max-w-none">
                                            <div className="m-2 p-1 rounded-xl">
                                                Mock up Bio : ipsum dolor sit
                                                amet consectetur adipisicing
                                            </div>
                                            <dl className="mt-2 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                                                {stats.map((stat) => (
                                                    <div
                                                        key={stat.id}
                                                        className="flex flex-col bg-gray-400/5 "
                                                    >
                                                        <dt className="text-sm font-semibold leading-6 text-gray-600">
                                                            {stat.name}
                                                        </dt>
                                                        <dd className="order-first text-lg font-semibold tracking-tight text-gray-900">
                                                            {stat.value}
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>
                                    </div>
                                </div>

                                {/* ****************** */}
                            </div>
                        </div>
                        <div className="flex justify-end px-2 ">
                            <div>
                                <button
                                    className="border-Primary border-2 rounded-full p-1 px-2 hover:bg-Primary hover:text-white
               text-Primary  font-medium"
                                >
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="  font-semibold border-b-2 py-2">
            <div className="cursor-pointer pl-24 text-base hover:font-extrabold ">
              Switch
            </div>
          </div> */}
                    <div>
                        <Content />
                        <Content />
                        <Content />
                        <Content />
                        <Content />
                        <Content />
                        <Content />
                        <Content />
                        <Content />
                    </div>
                </div>
                <div className="border-l-2">
                    <Search />
                    <SuggestContent />
                </div>
            </div>
        </div>
    );
}

export default FriendProfilePage;
