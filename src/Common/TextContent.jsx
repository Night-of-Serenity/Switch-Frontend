import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";

import { useNavigate } from "react-router-dom";

function TextContent() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h2 className="text-lg font-light ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti vero nostrum, quia explicabo voluptatem saepe
                    dolorem tempora quo, sequi minus obcaecati.
                </h2>
            </div>
            <div className="flex gap-20 flex-row mt-2">
                <FaRegComment
                    className="cursor-pointer"
                    onClick={() => navigate("/Comment")}
                />
                <FaRetweet className="text-lg cursor-pointer" />
                <FcLike className="cursor-pointer " />
            </div>
        </>
    );
}

export default TextContent;
