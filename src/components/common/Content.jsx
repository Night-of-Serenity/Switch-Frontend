import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function Content() {
  return (
    <div className="flex items-start p-2 mt-2 mb-2 space-x-4 justify-self-end border-b-2 ">
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
          <h2 className="text-xl font-light ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            vero nostrum, quia explicabo voluptatem saepe dolorem tempora quo,
            sequi minus obcaecati.
          </h2>
        </div>
        <div className="flex gap-20 flex-row mt-2">
          <FaRegComment className="cursor-pointer" />
          <FaRetweet className="text-lg cursor-pointer" />
          <FcLike className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Content;
