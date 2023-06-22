import React, { useState } from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";
import TextContent from "../../Common/TextContent";
import EditContent from "../../Common/EditContent";

function Content() {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="flex items-start p-2 mt-2 mb-2 space-x-4 justify-self-end border-b-2 ">
            <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="w-12 h-12 rounded-full dark:bg-gray-500 cursor-pointer"
            />
            <div className=" w-full">
                <div className="grid grid-cols-2 ">
                    <div className="flex flex-row">
                        <h2 className="text-lg font-semibold cursor-pointer ">
                            Leroy Jenkins &nbsp;
                        </h2>
                        <h2 className="text-lg font-normal "> :Mock Time</h2>
                    </div>
                    <div className="justify-self-end">
                        {/* **** */}
                        <div className="dropdown dropdown-end px-4">
                            <label tabIndex={0} className="cursor-pointer ">
                                <SlOptions />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-20"
                            >
                                <li>
                                    <a onClick={() => setIsEdit(true)}>Edit</a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            window.my_modal_Delete.showModal()
                                        }
                                    >
                                        Delete
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* **** */}
                    </div>
                </div>

                {/* <TextContent /> */}
                {isEdit ? <EditContent /> : <TextContent />}
            </div>
        </div>
    );
}

export default Content;
