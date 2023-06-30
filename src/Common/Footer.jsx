import React from "react";
import logo from "../images/logoBlack.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import SuggestFollow from "../components/common/SuggestFollow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getAccessToken } from "../utils/localstroge";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
    const [user, setUser] = useState(null);

    const values = useAuth();
    const { onSubmitLogin, user: myUser } = values;
    const { onSubmitRegister } = values;
    const navigate = useNavigate();

    const handleSubmit = async () => {
        await onSubmitRegister(user);
        // const token = getAccessToken()
        if (!myUser) return;
        // window.my_modal_2.showModal();
        navigate("/suggest");
    };

    // console.log(user);
    return (
        <div>
            <footer className="footer flex justify-between  p-4 bg-Primary text-neutral-content">
                <div></div>
                <div className="items-center grid-flow-col ">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        className="fill-current text-white"
                    >
                        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <div>
                        <p className="text-xl text-white font-bold">
                            Don’t miss what’s happening
                        </p>
                        <p className="text-white">
                            People on Switch are the first to know.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    {/* <button className="btn btn-outline rounded-3xl  text-white items-center bg-none border-white ">
            Log in
          </button> */}
                    <button
                        className="btn btn-outline rounded-3xl  text-white items-center bg-none border-white"
                        onClick={() => window.my_modal_login.showModal()}
                    >
                        Log in
                    </button>
                    <dialog id="my_modal_login" className="modal">
                        <form
                            method="dialog"
                            className="modal-box"
                            onSubmit={(e) => onSubmitLogin(user, e)}
                        >
                            {/* ****************************************** */}
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <img
                                        className="mx-auto h-24 w-auto"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <h2 className="mt-4 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                        Sign in to your Switch
                                    </h2>
                                    <div className="flex  gap-4 flex-col justify-center items-center pt-2">
                                        <button className="flex items-center  w-80 shadow-lg justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <FcGoogle className="text-2xl mr-2" />
                                            Log in with Google
                                        </button>
                                        <button className="flex  items-center  w-80 shadow-lg justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <FaFacebook className="text-2xl mr-2 text-blue-600" />
                                            Log in with Facebook
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <div
                                        className="space-y-6"
                                        action="#"
                                        method="POST"
                                    >
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    onChange={(e) =>
                                                        setUser({
                                                            ...user,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Password
                                                </label>
                                                <div className="text-sm">
                                                    <a
                                                        href="#"
                                                        className="font-semibold text-Primary hover:text-indigo-500"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    onChange={(e) =>
                                                        setUser({
                                                            ...user,
                                                            password:
                                                                e.target.value,
                                                        })
                                                    }
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-Primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                // onClick={() => onSubmitLogin(user)}
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </div>

                                    <p className="mt-10 text-center text-sm text-gray-500">
                                        Not a member?{" "}
                                        <div
                                            role="button"
                                            className="font-semibold leading-6 text-Primary hover:text-indigo-500"
                                            onClick={() =>
                                                window.my_modal_signup.showModal()
                                            }
                                        >
                                            Sign up
                                        </div>
                                    </p>
                                </div>
                            </div>

                            {/* ****************************************** */}
                        </form>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    {/* ***************sign up  */}

                    {/* Open the modal using ID.showModal() method */}
                    <button
                        className="btn btn-outline rounded-3xl  text-Primary items-center bg-white border-none"
                        onClick={() => window.my_modal_signup.showModal()}
                    >
                        Sign up
                    </button>
                    <dialog id="my_modal_signup" className="modal">
                        <form method="dialog" className="modal-box">
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <img
                                        className="mx-auto h-24 w-auto"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <h2 className="mt-4 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                        Sign in to your Switch
                                    </h2>
                                    <div className="flex  gap-4 flex-col justify-center items-center pt-2">
                                        <button className="flex items-center  w-80 shadow-lg justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <FcGoogle className="text-2xl mr-2" />
                                            Sign up with Google
                                        </button>
                                        <button className="flex items-center  w-80 shadow-lg justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <FaFacebook className="text-2xl mr-2 text-blue-600" />
                                            Sign with Facebook
                                        </button>

                                        {/* Open the modal using ID.showModal() method */}
                                        <button
                                            className="flex items-center  w-80 shadow-lg justify-center rounded-full px-3 py-1.5 text-sm font-bold leading-6 text-black border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() =>
                                                window.my_modal_create.showModal()
                                            }
                                        >
                                            Create account
                                        </button>
                                        <dialog
                                            id="my_modal_create"
                                            className="modal"
                                        >
                                            <div
                                                method="dialog"
                                                className="modal-box"
                                            >
                                                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                                        <img
                                                            className="mx-auto h-24 w-auto"
                                                            src={logo}
                                                            alt="Your Company"
                                                        />
                                                    </div>

                                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                                        <div
                                                            className="space-y-2"
                                                            action="#"
                                                            method="POST"
                                                        >
                                                            <div>
                                                                <label
                                                                    htmlFor="email"
                                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                                >
                                                                    Email
                                                                    address
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        required
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setUser(
                                                                                {
                                                                                    ...user,
                                                                                    email: e
                                                                                        .target
                                                                                        .value,
                                                                                }
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>

                                                            <label
                                                                htmlFor="email"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Username
                                                            </label>
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
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setUser(
                                                                            {
                                                                                ...user,
                                                                                username:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            </div>

                                                            <div>
                                                                <div className="flex items-center justify-between">
                                                                    <label
                                                                        htmlFor="password"
                                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                                    >
                                                                        Password
                                                                    </label>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="password"
                                                                        name="password"
                                                                        type="password"
                                                                        autoComplete="current-password"
                                                                        required
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setUser(
                                                                                {
                                                                                    ...user,
                                                                                    password:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center justify-between">
                                                                    <label
                                                                        htmlFor="password"
                                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                                    >
                                                                        Confrim
                                                                        Password
                                                                    </label>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="confirmPassword"
                                                                        name="confirmPassword"
                                                                        type="password"
                                                                        autoComplete="current-password"
                                                                        required
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setUser(
                                                                                {
                                                                                    ...user,
                                                                                    confirmPassword:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        htmlFor="email"
                                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                                    >
                                                                        Firstname
                                                                    </label>
                                                                    <div className="mt-2">
                                                                        <input
                                                                            id="firstName"
                                                                            name="firstName"
                                                                            type="text"
                                                                            autoComplete="email"
                                                                            required
                                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setUser(
                                                                                    {
                                                                                        ...user,
                                                                                        firstName:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    }
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        htmlFor="email"
                                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                                    >
                                                                        Lastname
                                                                    </label>
                                                                    <div className="mt-2">
                                                                        <input
                                                                            id="lastName"
                                                                            name="lastName"
                                                                            type="text"
                                                                            autoComplete="email"
                                                                            required
                                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setUser(
                                                                                    {
                                                                                        ...user,
                                                                                        lastName:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    }
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                {/* Open the modal using ID.showModal() method */}
                                                                <button
                                                                    className="flex w-full mt-8 justify-center rounded-md bg-Primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                    // onClick={() => window.my_modal_2.showModal()}
                                                                    onClick={() =>
                                                                        handleSubmit()
                                                                    }
                                                                >
                                                                    Sign up
                                                                </button>
                                                                <dialog
                                                                    id="my_modal_2"
                                                                    className="modal"
                                                                >
                                                                    <div
                                                                        method="dialog"
                                                                        className="modal-box"
                                                                    >
                                                                        {/* ****suggest*** */}
                                                                        {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                                                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                                                                <img
                                                                                    className="mx-auto h-24 w-auto"
                                                                                    src={
                                                                                        logo
                                                                                    }
                                                                                    alt="Your Company"
                                                                                />
                                                                                <h2 className="mt-2 mb-1  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                                                                    Don’t
                                                                                    miss
                                                                                    out
                                                                                </h2>
                                                                                <h2 className=" mb-1  text-sm font-light  text-gray-900">
                                                                                    When
                                                                                    you
                                                                                    follow
                                                                                    someone,
                                                                                    you’ll
                                                                                    see
                                                                                    their
                                                                                    Switch
                                                                                    in
                                                                                    your
                                                                                    Timeline.
                                                                                    You’ll
                                                                                    also
                                                                                    get
                                                                                    move
                                                                                    relevant
                                                                                    recommendations.
                                                                                </h2>
                                                                                <h2 className=" mb-1  text-sm font-medium  text-gray-900">
                                                                                    Follow
                                                                                    3
                                                                                    or
                                                                                    more
                                                                                    accounts
                                                                                </h2>
                                                                            </div>

                                                                            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                                                                                <SuggestFollow />
                                                                                <SuggestFollow />
                                                                                <SuggestFollow />
                                                                                <SuggestFollow />
                                                                                <SuggestFollow />
                                                                                <SuggestFollow />

                                                                                <button className="flex w-full mt-8 justify-center rounded-md bg-Primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                                                    Next
                                                                                </button>
                                                                            </div>
                                                                        </div> */}
                                                                    </div>
                                                                    <form
                                                                        method="dialog"
                                                                        className="modal-backdrop"
                                                                    >
                                                                        <button>
                                                                            close
                                                                        </button>
                                                                    </form>
                                                                </dialog>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form
                                                method="dialog"
                                                className="modal-backdrop"
                                            >
                                                <button>close</button>
                                            </form>
                                        </dialog>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Have an account already?{" "}
                                <div
                                    role="button"
                                    className="font-semibold leading-6 text-Primary hover:text-indigo-500 "
                                    onClick={() =>
                                        window.my_modal_login.showModal()
                                    }
                                >
                                    Log in
                                </div>
                            </p>
                        </form>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
