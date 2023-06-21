import React from "react";
import LogoSideBar from "../Common/LogoSideBar";
import Sidebar from "../components/Sidebar";
import SideBarGuest from "../components/SideBarGuest";
import Content from "../components/common/Content";
import Footer from "../Common/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function GuestPage() {
  return (
    <div className="h-screen  flex flex-col justify-between ">
      <div className="grid grid-cols-4 overflow-y-scroll">
        <div>
          {/* <Sidebar /> */}
          <SideBarGuest />
        </div>
        <div className=" col-span-2 border-r-2 border-l-2 overflow-scroll">
          <div>
            <h1 className="text-3xl font-bold mt-4 ml-4 mb-8">Explore</h1>
          </div>
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
        <div className="mt-4 ">
          <div className="border-2 m-6 rounded-xl p-4">
            <h1 className="text-2xl font-medium">New to Switch ?</h1>
            <h1>Sign up now to get your own personalized timeline!</h1>
            <div className="flex  gap-4 flex-col justify-center items-center p-4 ">
              <button className="flex items-center  w-full shadow-sm justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <FcGoogle className="text-2xl mr-2" />
                Sign up with Google
              </button>
              <button className="flex  items-center  w-full shadow-sm justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <FaFacebook className="text-2xl mr-2 text-blue-600" />
                Sign up with Facebook
              </button>
              <button
                className="flex items-center  w-full shadow-sm justify-center rounded-full px-3 py-1.5 text-sm font-bold leading-6 text-gray-600 border-gray-100 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => window.my_modal_create.showModal()}
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
