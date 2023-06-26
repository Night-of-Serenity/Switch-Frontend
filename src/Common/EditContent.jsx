import React from "react";
import { useFeed } from "../context/FeedContext";
import { useParams } from "react-router-dom";
import { useState } from "react";

function EditContent() {
    const { file, setFile } = useFeed();
    const { id } = useParams();

    const [post,setPost] = useState()
    return (
        <>
            <input
                name="post"
                id="post"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                onChange={(e) =>
                  setPost({
                      ...post,
                      textcontent: e.target.value,
                  })
              }
            />

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
        </>
    );
}

export default EditContent;
