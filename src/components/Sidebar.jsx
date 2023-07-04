import React from "react";
import LogoSideBar from "../Common/LogoSideBar";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiSettings } from "react-icons/fi";
import SwitchPost from "../Common/SwitchPost";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useFeed } from "../context/FeedContext";
import * as postService from "../api/post-api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./common/Loading";

function Sidebar() {
    const { logout, user } = useAuth();
    const { post, setPost, file, setFile,loading } = useFeed();

    const hdlLogout = () => {
        try {
            logout();
            toast.success("Logout Success");
        } catch (err) {
            toast.error("Logout Failed");
        }
    };

    const handleCancelPost = () => {
        setPost("");
        setFile(null);
    };

    const handleCloseModal = () => {
        if (post || file) {
            window.my_modal_Delete.showModal();
        }
    };

    return (
        <div className="h-full border-r-2 ">
            <div className="flex flex-col h-full p-3 w-full items-center dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <LogoSideBar />
                    </div>

                    <div className="flex-1 font-semibold">
                        <ul className="pt-2 pb-4  text-lg ">
                            <li className="rounded-sm text-gray-700 hover:text-Primary hover:bg-gray-50">
                                <Link
                                    to="/"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current dark:text-gray-400"
                                    >
                                        <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                    </svg>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="text-gray-700 hover:text-Primary hover:bg-gray-50">
                                <Link
                                    to="/explore"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current dark:text-gray-400"
                                    >
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                    <span>Explore</span>
                                </Link>
                            </li>

                            <li className="rounded-sm text-gray-700 hover:text-Primary hover:bg-gray-50">
                                <Link
                                    to="/message"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current dark:text-gray-400"
                                    >
                                        <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                                        <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                                    </svg>
                                    <span>Message</span>
                                </Link>
                            </li>
                            <li className="rounded-sm text-gray-700 hover:text-Primary hover:bg-gray-50">
                                <Link
                                    to="/profile/switch"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <CgProfile className="text-xl" />
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li className="rounded-sm text-gray-700 hover:text-Primary hover:bg-gray-50">
                                <Link
                                    to="/setting"
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FiSettings className="text-xl" />
                                    <span>Setting</span>
                                </Link>
                            </li>
                        </ul>

                        <button
                            className="w-full h-12 bg-Primary text-white text-lg font-bold rounded-full text-center hover:bg-stone-700  flex justify-center items-center my-10"
                            onClick={() => window.my_modal_switch.showModal()}
                        >
                            Switch
                        </button>
                        <dialog id="my_modal_switch" className="modal">
                            <form method="dialog" className="modal-box">
                                <button
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={() => handleCloseModal()}
                                    // ref={ref}
                                >
                                    X
                                </button>
                                <dialog id="my_modal_Delete" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            Delete Switch?
                                        </h3>
                                        <p className="py-4">
                                            This can’t be undone and it will be
                                            removed from your profile, the
                                            timeline of any accounts that follow
                                            you, and from Switch search results.
                                        </p>
                                        <div className="flex justify-end gap-2">
                                            <button
                                                // id="postId"
                                                // name="postId"
                                                className="bg-red-500 hover:font-extrabold rounded-md p-1 px-2 "
                                                onClick={() =>
                                                    handleCancelPost()
                                                }
                                            >
                                                Delete
                                            </button>
                                            <button className="bg-slate-200 hover:font-extrabold rounded-md p-1 px-2">
                                                Save draft
                                            </button>
                                        </div>
                                    </form>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop"
                                    >
                                        <button>close</button>
                                    </form>
                                </dialog>

                                <SwitchPost
                                    // handleCloseModal={handleCloseModal}
                                    // setIsCreate={setIsCreate}
                                    // isCreate={isCreate}
                                    // refComponent={ref}
                                />
                            </form>
                        </dialog>
                    </div>
                </div>
                <div className="flex justify-self-end h-full">
                    <div className="flex  p-2 mt-24 space-x-4 justify-end items-end  ">
                        {user.profileImageUrl ? (
                            <img
                                className=" w-12 h-12 rounded-full object-cover"
                                src={user.profileImageUrl}
                            />
                        ) : (
                            <UserCircleIcon
                                className="h-12 w-12 text-gray-300"
                                aria-hidden="true"
                            />
                        )}
                        <div>
                            <h2 className="text-lg font-semibold cursor-pointer ">
                                {user.username}
                            </h2>
                            <a
                                className="text-sm font-semibold flex flex-row justify-end hover:font-extrabold cursor-pointer"
                                onClick={hdlLogout}
                            >
                                Log out
                                <FiLogOut className="text-lg ml-1 pt-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Spinner loading={loading} />
        </div>
    );
}

export default Sidebar;
