import React from "react";
import { useFeed } from "../context/FeedContext";
import { useState } from "react";
import * as postService from "../api/post-api";
import { useRef } from "react";

function EditContent({ postId, setIsEdit, imageUrl, textcontent }) {
    const { fetchUserProfile } = useFeed();
    const inputRef = useRef();

    const [post, setPost] = useState([]);

    const [showImage, setShowImage] = useState(null);
    const [image, setImage] = useState(null);

    const hdlSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in post) {
            formData.append(key, post[key]);
        }
        if (image) {
            formData.append("postImage", image);
        }

        const res = await postService.editPost(formData, postId);
        setPost(res.data.post);
        setIsEdit(false);
        fetchUserProfile();
    };
    return (
        <form onSubmit={hdlSubmit}>
            <input
                name="post"
                id="post"
                type="text"
                // placeholder="Type here"
                className="input input-bordered w-full "
                // defaultValue={textcontent}
                value={textcontent}
                onChange={(e) =>
                    setPost({
                        ...post,
                        textcontent: e.target.value,
                    })
                }
            />

            <div className="mt-2 flex items-center gap-x-3">
                {imageUrl ? (
                    <img className=" w-28 h-28 rounded-full" src={imageUrl} />
                ) : null}

                <input
                    type="file"
                    className="hidden"
                    ref={inputRef}
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                        setShowImage(URL.createObjectURL(e.target.files[0]));
                    }}
                />
                <button
                    onClick={() => inputRef.current.click()}
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    Upload
                </button>
            </div>

            <div className="p-2 pr-8">
                <div className=" flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-Primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Primary"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditContent;
