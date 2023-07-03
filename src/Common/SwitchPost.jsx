
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";

import { useFeed } from "../context/FeedContext";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/common/Loading";
import Spinner from "../components/common/Loading";


export default function SwitchPost() {


    const { createPost, file, setFile, post, setPost, loading, setLoading } =
        useFeed();
    // const [isCreate, setIsCreate] = useState(false);
    const { user } = useAuth();

    const ref = useRef();

    const handleOnClick = () => {
        ref.current.click();
    };

    const onSubmitPost = async () => {
        const formData = new FormData();
        if (file) {
            formData.append("postImage", file[0]);
        }
        if (post) {
            formData.append("textcontent", post);
        }
        await createPost(formData);
        setIsCreate(true);
        setFile(null);
        setPost("");
        // window.my_modal_switch.showModal();

        // setIsCreate(true);
    };

    // const handleSet = ()=>{
    //     handleCloseModal();
    //     setPost("");
    //     setFile(null);
    // }

    // const handleClose = async () => {
    //     await onSubmitPost();
    //     handleSet()
    // };

    // useEffect(() => {
    //     if (isCreate) {
    //         refComponent.current.click();
    //         setIsCreate(false);
    //     }
    // }, [isCreate]);

    return (
        <>
            
                <div className="flex items-start space-x-4 w-full">
                    <div className="flex-shrink-0  m-4">
                        <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={user.profileImageUrl}
                            alt=""
                        />
                    </div>
                    <div className="min-w-0 w-full pr-2 ">
                        <div className="relative my-4 ">
                            <div className="overflow-hidden rounded-lg  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-Primary">
                                <label htmlFor="comment" className="sr-only">
                                    Add your Switch
                                </label>
                                <textarea
                                    rows={3}
                                    name="comment"
                                    id="comment"
                                    className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Add your Switch..."
                                    value={post}
                                    onChange={(e) => setPost(e.target.value)}
                                />
                                <div>
                                    {file ? (
                                        <img
                                            className="p-4 "
                                            src={URL.createObjectURL(file[0])}
                                        />
                                    ) : null}
                                </div>

                                {/* Spacer element to match the height of the toolbar */}
                                <div className="py-2" aria-hidden="true">
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
                                            onClick={handleOnClick}
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
                                            type="file"
                                            ref={ref}
                                            className="hidden"
                                            onChange={(e) =>
                                                setFile(e.target.files)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <button
                                        className="inline-flex items-center rounded-md bg-Primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => onSubmitPost()}
                                    >
                                        Switch!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    );
}
