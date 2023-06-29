import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";

// import Content from "../components/common/Content";

import SuggestContent from "../Common/SuggestContent";
import Search from "../Common/Search";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useFeed } from "../context/FeedContext";
import { useParams } from "react-router-dom";
import ReplyContent from "../components/common/ReplyContent";
import Content from "../components/common/Content";

function CommentPage() {
    const [comment, setComment] = useState("");
    const [file, setFile] = useState(null);

    const { fetchPostDetail, postDetail, createReply } = useFeed();

    const { postId } = useParams();
    useEffect(() => {
        fetchPostDetail(postId);
    }, []);

    const ref = useRef(null);
    const handleClickUpload = () => {
        ref.current.click();
    };

    const onSubmitReply = (e) => {
        e.preventDefault();
        const formData = new FormData();

        if (file) {
            formData.append("replyImage", file[0]);
        }
        if (comment) {
            formData.append("textcontent", comment);
        }

        createReply(postId, formData);
        setFile(null);
        setComment("");
    };

    return (
        <div className="h-screen  flex flex-col justify-between">
            {/* {Object.keys(postDetail).length > 0 ? (
                <Content feed={postDetail} />
            ) : null} */}

            <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
                <div>
                    <Sidebar />
                </div>
                <div className=" col-span-2 h-screen overflow-scroll">
                    <div>
                        <h1 className="text-3xl font-bold py-4 pl-2 pb-1  border-b-2">
                            @ Switch
                        </h1>
                    </div>
                    {Object.keys(postDetail).length > 0 ? (
                        <Content feed={postDetail} />
                    ) : null}
                    <div>
                        {/* <Content /> */}
                        <div className="flex items-start space-x-4 pr-4">
                            <div className="flex-shrink-0 m-4">
                                <img
                                    className="inline-block h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <form
                                    className="relative my-4"
                                    onSubmit={(e) => onSubmitReply(e)}
                                >
                                    <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-Primary">
                                        <label
                                            htmlFor="comment"
                                            className="sr-only"
                                        >
                                            Add your Comment
                                        </label>
                                        <textarea
                                            rows={3}
                                            name="comment"
                                            id="comment"
                                            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Add your Comment..."
                                            value={comment}
                                            onChange={(e) =>
                                                setComment(e.target.value)
                                            }
                                        />
                                        <div>
                                            {file ? (
                                                <img
                                                    className="p-4 w-60 "
                                                    src={URL.createObjectURL(
                                                        file[0]
                                                    )}
                                                />
                                            ) : null}
                                        </div>
                                        {/* Spacer element to match the height of the toolbar */}
                                        <div
                                            className="py-2"
                                            aria-hidden="true"
                                        >
                                            {/* Matches height of button in toolbar (1px border + 36px content height) */}
                                            <div className="py-px">
                                                <div className="h-9" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                                        <div className="flex items-center space-x-5">
                                            <div className="flex items-center">
                                                <button
                                                    type="button"
                                                    className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                                    onClick={() =>
                                                        handleClickUpload()
                                                    }
                                                >
                                                    <PaperClipIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="sr-only">
                                                        Attach a file
                                                    </span>
                                                </button>
                                                <input
                                                    className="hidden"
                                                    type="file"
                                                    ref={ref}
                                                    onChange={(e) =>
                                                        setFile(e.target.files)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center rounded-md bg-Primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Switch!
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="m-8">
                            {Object.keys(postDetail).length > 0
                                ? postDetail.Replies.map((el) => (
                                      <ReplyContent feed={el} />
                                  ))
                                : null}
                            {/* <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content /> */}
                        </div>
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

export default CommentPage;
