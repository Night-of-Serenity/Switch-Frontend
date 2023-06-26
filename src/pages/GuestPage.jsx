import React from "react";
import LogoSideBar from "../Common/LogoSideBar";
import Sidebar from "../components/Sidebar";
import SideBarGuest from "../components/SideBarGuest";
import Content from "../components/common/Content";
import Footer from "../Common/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import jwt_decode from "jwt-decode";
import { useFeed } from "../context/FeedContext";

function GuestPage() {
    const [user, setUser] = useState({});
    const { glogin } = useAuth();
    const { fetchAllFeed, feeds } = useFeed();

    function hdlCallbackResponse(response) {
        console.log(response.credential);
        glogin(response.credential);
    }

    useEffect(()=> {
        /* global google */

        window.google?.accounts.id.initialize({
            client_id:
                "4895840566-r15u5itchkke59di00k8qk30th35jq2e.apps.googleusercontent.com",
            callback: hdlCallbackResponse,
        });

        window.google?.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);

    return (
        <div className="h-screen  flex flex-col justify-between ">
            <div className="grid grid-cols-4 overflow-y-scroll h-full">
                <div>
                    {/* <Sidebar /> */}
                    <SideBarGuest />
                </div>
                <div className=" col-span-2 border-r-2 border-l-2">
                    <div>
                        <h1 className="text-3xl font-bold mt-4 ml-4 mb-8">
                            Explore
                        </h1>
                    </div>

                    <Content />
                    {/* {feeds.map((el) => (
                        <Content feed={el} />
                    ))} */}
                </div>
                <div className="mt-4 ">
                    <div className="border-2 m-6 rounded-xl p-4">
                        <h1 className="text-2xl font-medium">
                            New to Switch ?
                        </h1>
                        <h1>
                            Sign up now to get your own personalized timeline!
                        </h1>
                        <div className="flex  gap-4 flex-col justify-center items-center p-4 ">
                            <button
                                id="signInDiv"
                                className="flex items-center  w-full shadow-sm justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <FcGoogle className="text-2xl mr-2" />
                                Sign up with Google
                            </button>
                            <button className="flex  items-center  w-full shadow-sm justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <FaFacebook className="text-2xl mr-2 text-blue-600" />
                                Sign up with Facebook
                            </button>
                            {/* <div id="signInDiv"></div> */}
                            <button
                                className="flex items-center  w-full shadow-sm justify-center rounded-full px-3 py-1.5 text-sm font-bold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() =>
                                    window.my_modal_create.showModal()
                                }
                            >
                                Create account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GuestPage;
