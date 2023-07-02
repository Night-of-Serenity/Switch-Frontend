import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import logoCover from "../images/Cover.png";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import Content from "../components/common/Content";
import SuggestContent from "../Common/SuggestContent";
import Search from "../Common/Search";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useFeed } from "../context/FeedContext";
import { useAuth } from "../context/AuthContext";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import PostContainer from "../components/profile/PostContainer";
import FollowContainer from "../components/profile/FollowContainer";

function ProfilePage() {
    const {
        fetchUserProfile,
        profile,
        fetchMediaProfile,
        mediaProfile,
        likes,
        fetchLikes,
        fetchAll,
    } = useFeed();
    const { fetchMe, user, userDetail } = useAuth();
    const navigate = useNavigate();
    const { tab } = useParams();
    const [active, setActive] = useState(tab);

    let dateString = "";

    if (profile) {
        const date = new Date(user.createdAt);
        // {profile[0]?.User?.createdAt}
        dateString = date.toLocaleDateString();
    }

    const stats = [
        {
            id: 1,
            name: "Switch",
            value: profile?.length ? profile.length : 0,
        },
        {
            id: 2,
            name: "Follower",
            value: userDetail?.followers?.length
                ? userDetail.followers.length
                : 0,
        },
        {
            id: 3,
            name: "Following",
            value: userDetail?.followings?.length
                ? userDetail.followings.length
                : 0,
        },
    ];
    // console.log(user?.followings);
    // console.log(user);
    // console.log(profile);

    useEffect(() => {
        fetchMe();
        fetchUserProfile();
        fetchMediaProfile();
        fetchLikes();
        // fetchAll();
        // console.log(likes);
    }, []);
    const handleOnClickMedia = () => {
        setActive("media");
        // fetchAll();
        // fetchMe()
    };

    let contents = [];
    let isPost = false;
    if (tab === "switch") {
        contents = profile;
        isPost = true;
    } else if (tab === "media") {
        contents = mediaProfile;

        isPost = true;
    } else if (tab === "like") {
        contents = likes;
        isPost = true;
    }

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
                            {user.profileImageUrl ? (
                                <img
                                    src={user.profileImageUrl}
                                    // src={profile[0]?.User?.profileImageUrl}
                                    alt=""
                                    className="w-36 h-36 object-cover rounded-full dark:bg-gray-500  "
                                />
                            ) : (
                                <UserCircleIcon
                                    className="h-36 w-36 text-gray-300"
                                    aria-hidden="true"
                                />
                            )}
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
                                                    {user.username} said
                                                </div>
                                                <div>: {user.bio}</div>
                                            </div>
                                            <dl className="mt-2 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                                                {stats.map((stat) => (
                                                    <Link
                                                        to={`/profile/${stat.name.toLowerCase()}`}
                                                        key={stat.id}
                                                    >
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
                                                    </Link>
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
                                    onClick={() => navigate("/Setting")}
                                >
                                    Set up proflie
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-center font-semibold border-b-2 py-2">
                        <Link to="/profile/switch">
                            <div
                                className={`cursor-pointer hover:font-extrabold ${
                                    active === "switch"
                                        ? "text-Primary underline"
                                        : ""
                                }`}
                                onClick={() => setActive("switch")}
                            >
                                Switch
                            </div>
                        </Link>

                        {/* <Link to={`/trend/${trend.id}`}>
                    <h1 className="text-base"># {trend.tagName}</h1>
                </Link> */}

                        <Link to="/profile/media">
                            <div
                                className={`cursor-pointer hover:font-extrabold ${
                                    active === "media"
                                        ? "text-Primary  underline"
                                        : ""
                                }`}
                                // onClick={() => setActive("media")}
                                onClick={() => handleOnClickMedia()}
                            >
                                Media
                            </div>
                        </Link>
                        <Link to="/profile/like">
                            <div
                                className={`cursor-pointer hover:font-extrabold ${
                                    active === "like"
                                        ? "text-Primary underline"
                                        : ""
                                }`}
                                onClick={() => setActive("like")}
                            >
                                Likes
                            </div>
                        </Link>
                    </div>
                    {isPost ? (
                        <PostContainer contents={contents} />
                    ) : (
                        <FollowContainer />
                    )}
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
