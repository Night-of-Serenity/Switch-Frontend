import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import logoCover from "../images/Cover.png";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import Content from "../components/common/Content";
import SuggestContent from "../Common/SuggestContent";
import Search from "../Common/Search";
import { useNavigate, Link } from "react-router-dom";
import { useFeed } from "../context/FeedContext";
import { useAuth } from "../context/AuthContext";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function ProfilePage() {
    const { fetchUserProfile, profile } = useFeed();
    const { fetchMe, user } = useAuth();
    const nevigate = useNavigate();

    let dateString = "";

    if (profile) {
        const date = new Date(user.createdAt);
        // {profile[0]?.User?.createdAt}
        dateString = date.toLocaleDateString();
    }
    // console.log(date);
    const stats = [
        { id: 1, name: "Switch", value: "88.2k" },
        { id: 2, name: "Follower", value: "100k" },
        { id: 3, name: "Following", value: "0" },
    ];
    // console.log(profile);

    useEffect(() => {
        // fetchMe();
        fetchUserProfile();
    }, []);

    console.log(profile);
    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
                <div>
                    <Sidebar />
                </div>
                <div className=" col-span-2 h-screen overflow-scroll">
                    <div>
                        <h1 className="text-3xl font-bold py-4 pl-2 pb-1  border-b-2">
                            {/* @ {profile[0]?.User?.username} */}@{" "}
                            {user.username}
                        </h1>
                    </div>
                    <div className="flex items-center bg-Primary opacity-90 justify-center border-b-2 pb-4">
                        <img src={logoCover} className="w-2/5  "></img>
                    </div>
                    <div className="grid grid-cols-4 py-2 ">
                        <div className="flex justify-center">
                            { user.profileImageUrl? (<img
                                src={user.profileImageUrl}
                                // src={profile[0]?.User?.profileImageUrl}
                                alt=""
                                className="w-36 h-36 rounded-full dark:bg-gray-500  "
                            />):(<UserCircleIcon
                                className="h-36 w-36 text-gray-300"
                                aria-hidden="true"
                            />)}
                            


                            
                            
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-xl font-semibold mx-1 text-slate-600">
                                @ {user.username}
                                {/* @ {profile[0]?.User?.username} */}
                            </h1>
                            <h1 className="flex flex-row text-slate-500">
                                <BsFillCalendar2HeartFill className="text-sm my-1 mx-1" />
                                Joined {dateString}
                            </h1>
                            <div>
                                {/* ****************** */}
                                <div className="bg-white ">
                                    <div className=" ">
                                        <div className=" lg:max-w-none gap-4">
                                            <div className="flex flex-row justify-start items-center">
                                                <div className="m-2 p-1 rounded-xl font-extrabold  ">
                                                    {profile[0]?.User?.username}{" "}
                                                    said
                                                </div>
                                                <div>
                                                    : {profile[0]?.User?.bio}
                                                </div>
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
                                    className="border-Primary border-2 rounded-full p-1 hover:bg-Primary hover:text-white
               text-Primary  font-medium"
                                    onClick={() => nevigate("/Setting")}
                                >
                                    Set up proflie
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-center font-semibold border-b-2 py-2">
                        <Link to="/profile/switch">
                            <div className="cursor-pointer hover:font-extrabold ">
                                Switch
                            </div>
                        </Link>
                        <div className="cursor-pointer hover:font-extrabold">
                            Media
                        </div>
                        <div className="cursor-pointer hover:font-extrabold">
                            Likes
                        </div>
                    </div>
                    <div>
                        {profile.map((el) => (
                            <Content feed={el} />
                        ))}
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

export default ProfilePage;
