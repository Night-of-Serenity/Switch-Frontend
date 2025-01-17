import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import * as userService from "../api/user-api";
import { fetchMe } from "../api/auth-api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useFeed } from "../context/FeedContext";
import Loading from "../components/common/Loading";
import Spinner from "../components/common/Loading";

export default function SettingContent({
    profileImageUrl,
    coverImageUrl,
    username,
    bio,
}) {
    const inputRef = useRef();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { fetchMe } = useAuth();
    const {setLoading } = useFeed();

    // const [showImage, setShowImage] = useState(null);
    const [image, setImage] = useState(null);
    // const [coverImage, setCoverImage] = useState(null);

    const [file, setFile] = useState("");

    const hdlSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let key in user) {
            formData.append(key, user[key]);
        }
        if (image) {
            formData.append("profileImageUrl", image);
        }
        // if (coverImage) {
        //     formData.append("coverImageUrl", coverImage);
        // }
        setLoading(true);
        const res = await userService.editProfile(formData);
        setUser(res.data.user);
        navigate("/profile/switch");
         fetchMe();
        setLoading(false);
    };

    const hdlCancel = () => {
        setFile(null);
    };
    return (
        <>
                <form>
                    <div className="space-y-6 p-8 ">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-xl font-semibold leading-7 text-gray-900">
                                Profile
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This information will be displayed publicly so
                                be careful what you share.
                            </p>

                            <div className="col-span-full pt-4">
                                <label
                                    htmlFor="photo"
                                    className="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    {profileImageUrl ? (
                                        <img
                                            className=" w-28 object-cover h-28 rounded-full"
                                            src={
                                                image
                                                    ? URL.createObjectURL(image)
                                                    : profileImageUrl
                                            }
                                        />
                                    ) : (
                                        <UserCircleIcon
                                            className="h-28 w-28 text-gray-300"
                                            aria-hidden="true"
                                        />
                                    )}

                                    <input
                                        type="file"
                                        className="hidden"
                                        ref={inputRef}
                                        onChange={(e) => {
                                            setImage(e.target.files[0]);
                                            // setShowImage(
                                            //     URL.createObjectURL(e.target.files[0])
                                            // );
                                        }}
                                    />
                                    <button
                                        onClick={() => inputRef.current.click()}
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Change
                                    </button>
                                </div>

                                {/* <label
                            htmlFor="photo"
                            className="block text-lg font-medium leading-6 text-gray-900"
                        >
                            Cover Image
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                            {coverImageUrl ? (
                                <img
                                    className=" w-28 h-28 "
                                    src={
                                        coverImage
                                            ? URL.createObjectURL(coverImage)
                                            : coverImageUrl
                                    }
                                />
                            ) : (
                                <UserCircleIcon
                                    className="h-28 w-28 text-gray-300"
                                    aria-hidden="true"
                                />
                            )}

                            <input
                                type="file"
                                className="hidden"
                                ref={inputRef}
                                onChange={(e) => {
                                    setCoverImage(e.target.files[0]);
                                 
                                }}
                            />
                            <button
                                onClick={() => inputRef.current.click()}
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Change
                            </button>
                        </div> */}
                            </div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-Primary sm:max-w-md">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                                @
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                autoComplete="username"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Username"
                                                defaultValue={username}
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        username:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="about"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Bio.
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-3/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                            defaultValue={bio}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    bio: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        Write a few sentences about yourself.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-8">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">
                                Setting and privacy
                            </h2>
                            {/* <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p> */}

                            <div className="mt-8  gap-x-6 gap-y-8 ">
                                <div className="w-2/5">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Old Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="oldPassword"
                                            type="password"
                                            autoComplete="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    oldPassword: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="w-2/5">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        New Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            name="newPassword"
                                            id="password"
                                            autoComplete="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    newPassword: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="w-2/5">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            name="newPassword"
                                            id="password"
                                            autoComplete="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    newPassword: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 pr-8">
                        <div className=" flex items-center justify-end gap-x-6">
                            <button>
                                <span
                                    type="button"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                    onClick={hdlCancel}
                                >
                                    Cancel
                                </span>
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-Primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Primary"
                                onClick={hdlSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
          
            
        </>
    );
}
