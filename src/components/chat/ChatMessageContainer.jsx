import { useEffect } from "react";
import ChatRoomHeader from "./ChatRoomHeader";
import MessageOtherUser from "./MessageOtherUser";
import MessageUser from "./MessageUser";
import ChatMessageBar from "./ChatMessageBar";
export default function ChatMessageContainer({ user }) {
    useEffect(() => {}, []);
    return (
        <div className="col-span-2 border-l-2 flex flex-col">
            <ChatRoomHeader />
            <div className="h-full  overflow-scroll">
                <MessageOtherUser />
                <MessageUser />
            </div>
            <ChatMessageBar user={user} />
        </div>
    );
}
