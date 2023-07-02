import Sidebar from "../components/Sidebar";
import ChatRoomBox from "../components/chat/ChatRoomBox";
import ChatRoomHeader from "../components/chat/ChatRoomHeader";
import ChatMessageBar from "../components/chat/ChatMessageBar";
import MessageOtherUser from "../components/chat/MessageOtherUser";
import MessageUser from "../components/chat/MessageUser";
import ChatMessageContainer from "../components/chat/ChatMessageContainer";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function MessagePage() {
    const [open, setOpen] = useState(false);
    const hldOpenMessage = () => {
        setOpen(true);
    };
    const { user } = useAuth();
    // console.log(user);
    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
                <div>
                    <Sidebar />
                </div>
                <div>
                    <div className="border-b-2 py-8 pl-4">
                        <h1 className="text-2xl font-bold">Message</h1>
                    </div>
                    <div className="overflow-scroll">
                        <ChatRoomBox onClick={hldOpenMessage} />
                    </div>
                </div>
                {open && <ChatMessageContainer user={user} />}
            </div>
        </div>
    );
}

export default MessagePage;
