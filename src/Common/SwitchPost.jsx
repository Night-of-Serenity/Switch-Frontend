// import { Fragment, useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
// import { Listbox, Transition } from "@headlessui/react";

export default function SwitchPost() {
    //   const [selected, setSelected] = useState(moods[5]);

    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 m-4">
                <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <div className="min-w-0 flex-1">
                <form action="#" className="relative my-4">
                    <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-Primary">
                        <label htmlFor="comment" className="sr-only">
                            Add your Switch
                        </label>
                        <textarea
                            rows={3}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Add your Switch..."
                            defaultValue={""}
                        />

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
                                >
                                    <PaperClipIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        Attach a file
                                    </span>
                                </button>
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
    );
}
