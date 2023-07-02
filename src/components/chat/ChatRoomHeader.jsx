/* eslint-disable react/prop-types */
export default function ChatRoomHeader({ contactUser }) {
    // console.log("contact user:", contactUser);
    return (
        <div className="flex flex-col py-6 border-b-2 items-center gap-2">
            <img
                src={contactUser?.profileImageUrl}
                alt="contactUser"
                className="w-24 h-24 rounded-full dark:bg-gray-500 cursor-pointer"
            />
            <h2>Username : {contactUser?.username}</h2>
        </div>
    );
}
