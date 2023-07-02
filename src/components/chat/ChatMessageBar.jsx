import { BarsArrowUpIcon, UsersIcon } from "@heroicons/react/20/solid";
import { useChat } from "../../context/ChatContext";
import { useState } from "react";

export default function ChatMessageBar({ user }) {
    // console.log(userId);
    const { sendMessage } = useChat();
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        console.log(user.id);
        sendMessage(message, user.id, 5);
        setMessage("");
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    return (
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
                    onChange={handleInputChange}
                />
            </div>
            <button
                type="button"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={handleSendMessage}
            >
                <BarsArrowUpIcon
                    className="-ml-0.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
                Sent
            </button>
        </div>
    );
}