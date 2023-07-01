export default function ChatRoomHeader() {
    return (
        <div className="flex flex-col py-6 border-b-2 items-center gap-2">
            <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="w-24 h-24 rounded-full dark:bg-gray-500 cursor-pointer"
            />
            <h2>Username :Mockup</h2>
        </div>
    );
}
