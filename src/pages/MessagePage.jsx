import Sidebar from "../components/Sidebar";
import ChatRoomBox from "../components/chat/ChatRoomBox";
import ChatRoomHeader from "../components/chat/ChatroomHeader";
import ChatMessageBar from "../components/chat/ChatMessageBar";
import MessageOtherUser from "../components/chat/MessageOtherUser";
import MessageUser from "../components/chat/MessageUser";
function MessagePage() {
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
                        <ChatRoomBox />
                    </div>
                </div>
                <div className="col-span-2 border-l-2 flex flex-col">
                    <ChatRoomHeader />
                    <div className="h-full  overflow-scroll">
                        <MessageOtherUser />
                        <MessageUser />
                    </div>

                    <ChatMessageBar />
                </div>
            </div>
        </div>
    );
}

export default MessagePage;
