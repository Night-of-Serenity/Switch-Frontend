import React from "react";
import Sidebar from "../components/Sidebar";
import logoCover from "../images/Cover.png";
import { BsFillCalendar2HeartFill, BsEnvelopeHeart } from "react-icons/bs";
import Content from "../components/common/Content";
import SuggestContent from "../Common/SuggestContent";
import Search from "../Common/Search";
import { useFeed } from "../context/FeedContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AiOutlineMessage } from "react-icons/ai";

import { BiMessageDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/20/solid";

function FriendProfilePage() {
    const {
        fetchotheruserdetail,
        friendDetail,
        updateFollowing,
        fetchSwitchOtherUser,
        friendSwitch,
    } = useFeed();
    const { user } = useAuth();

    const followings = friendDetail.followers;

    const isMyFollowings = followings
        ? followings.find((el) => el.id === user.id)
        : false;
    // console.log(isMyFollowings);
    const { otherUserId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetchotheruserdetail(otherUserId);
        fetchSwitchOtherUser(otherUserId);
    }, []);

    const friend = friendDetail.user;
    // console.log(friend);

    let dateString = "";

    if (friend) {
        const date = new Date(friend?.createdAt);
        dateString = date.toLocaleDateString();
    }

    const handleFollow = async () => {
        await updateFollowing(friend.id);
        fetchotheruserdetail(otherUserId);
    };

    const stats = [
        { id: 1, name: "Switch", value: friendDetail?.reswitchedCount },
        {
            id: 2,
            name: "Follower",
            value: friendDetail?.followers ? friendDetail.followers.length : 0,
        },
        {
            id: 3,
            name: "Following",
            value: friendDetail?.followings
                ? friendDetail.followings.length
                : 0,
        },
    ];
    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
                <div>
                    <Sidebar />
                </div>
                <div className=" col-span-2 h-screen overflow-scroll">
                    <div>
                        <h1 className="text-3xl font-bold py-4 pl-2 pb-1  border-b-2">
                            @{friend?.username}
                        </h1>
                    </div>
                    <div className="flex items-center bg-Primary opacity-90 justify-center border-b-2 pb-4">
                        <img src={logoCover} className="w-2/5  "></img>
                    </div>
                    <div className="grid grid-cols-4 border-b-2 py-2 ">
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={friend?.profileImageUrl?(friend?.profileImageUrl):("https://tse2.mm.bing.net/th?id=OIP.PJB4lxw88QRaADN8UWxV4AHaHa&pid=Api&P=0&h=180"
                                )}
                                alt=""
                                className="w-36 h-36 object-cover rounded-full dark:bg-gray-500  "
                            />
                            <div className=" text-base font-extrabold pt-4 ">
                                Switch
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-xl font-semibold mx-1 text-slate-600">
                                @{friend?.username}
                            </h1>
                            <h1 className="flex flex-row text-slate-500">
                                <BsFillCalendar2HeartFill className="text-sm my-1 mx-1" />
                                Joined {dateString}
                            </h1>
                            <div>
                                {/* ****************** */}
                                <div className="bg-white ">
                                    <div className=" py-2">
                                        <div className=" lg:max-w-none">
                                            <div className="flex flex-row justify-start items-center">
                                                <div className="m-2 p-1 rounded-xl">
                                                    {friend?.username} said
                                                </div>
                                                <div>: {friend?.bio}</div>
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
                                {isMyFollowings ? (
                                    <button
                                        className="border-Primary border-2 rounded-full p-1 px-2 hover:bg-Primary hover:text-white
           text-Primary  font-medium"
                                        onClick={handleFollow}
                                    >
                                        Following
                                    </button>
                                ) : (
                                    <button
                                        className="bg-Primary border-2 border-Primary hover:bg-white hover:text-Primary  rounded-full px-3 py-1 text-white font-normal"
                                        onClick={handleFollow}
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                            <div>
                                <button
                                    className="text-3xl font-thin text-Primary pt-1 pl-2 "
                                    onClick={() => navigate("/message")}
                                >
                                    {/* <BsEnvelopeHeart /> */}

                                    <BiMessageDetail />
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
                        {friendSwitch.map((el) => (
                            <Content key={el.id} feed={el} />
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

export default FriendProfilePage;
