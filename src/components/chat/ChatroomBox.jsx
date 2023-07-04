/* eslint-disable react/prop-types */
export default function ChatRoomBox({
    username,
    contactUserId,
    profileImage,
    lastMessageText,
    lastMessageTime,
    onOpenChat,
}) {
    return (
        <div
            onClick={() => onOpenChat(contactUserId)}
            className="flex items-start p-2 mt-2 mb-2 space-x-4 hover:bg-purple-300 justify-self-end border-b-2 cursor-pointer "
        >
            <img
                src={profileImage}
                alt="profileImage"
                className="w-12 h-12 rounded-full object-cover dark:bg-gray-500 cursor-pointer"
            />
            <div>
                <div className="flex flex-row">
                    <h2 className="text-lg font-semibold cursor-pointer ">
                        {username} &nbsp;
                    </h2>
                    <h2 className="text-lg font-normal ">
                        :{lastMessageTime ? lastMessageTime : ""}
                    </h2>
                </div>
                <div>
                    <h2 className="text-base font-light ">
                        {lastMessageText
                            ? lastMessageText?.length > 25
                                ? lastMessageText.slice(0, 25) + "..."
                                : lastMessageText
                            : ""}
                    </h2>
                </div>
            </div>
        </div>
    );
}
