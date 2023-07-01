import React from "react";
import Sidebar from "../components/Sidebar";
import { BarsArrowUpIcon, UsersIcon } from "@heroicons/react/20/solid";
function MessagePage() {
  return (
    <div className="h-screen  flex flex-col justify-between">
      <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
        <div>
          <Sidebar />
        </div>
        <div>
          <div className="border-b-2 py-8 pl-4">
            <h1 className="text-2xl font-bold">Message</h1>
          </div>
          <div className="overflow-scroll">
            <div className="flex items-start p-2 mt-2 mb-2 space-x-4 justify-self-end border-b-2  ">
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="w-12 h-12 rounded-full dark:bg-gray-500 cursor-pointer"
              />
              <div>
                <div className="flex flex-row">
                  <h2 className="text-lg font-semibold cursor-pointer ">
                    Leroy Jenkins &nbsp;
                  </h2>
                  <h2 className="text-lg font-normal "> :Mock Time</h2>
                </div>
                <div>
                  <h2 className="text-xl font-light ">Lorem ipsum dolor,</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 border-l-2 flex flex-col">
          <div className="flex flex-col py-6 border-b-2 items-center gap-2">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-24 h-24 rounded-full dark:bg-gray-500 cursor-pointer"
            />
            <h2>Username :Mockup</h2>
          </div>
          <div className="h-full  overflow-scroll">
            {/* <div className="m-4">
              <span className="p-2 text-white bg-primary rounded-xl">test</span>
            </div> */}
            <div className="m-4">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-purple-700">
                Do you love me?
              </span>
            </div>
            <div className="m-4 text-end">
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-2 text-sm font-medium text-purple-700">
                Sex today pay tomorrow.
              </span>
            </div>
          </div>
          <div className="mt-2 flex  py-2 rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UsersIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full  h-12 rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Message"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <BarsArrowUpIcon
                className="-ml-0.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Sent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
