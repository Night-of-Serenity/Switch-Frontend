import Sidebar from "../components/Sidebar";
import ChatRoomBox from "../components/chat/ChatRoomBox";
import ChatMessageContainer from "../components/chat/ChatMessageContainer";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useChat } from "../context/ChatContext";

function MessagePage() {
    const {
        contacts,
        fetchContactRooms,
        setIsCreateNewChat,
        hldOpenMessage,
        openChatRoom,
        setOpenChatRoom,
    } = useChat();
    // console.log(newContactUser);
    const { user } = useAuth();

    useEffect(() => {
        return () => {
            setIsCreateNewChat(false);
            setOpenChatRoom(false);
        };
    }, []);

    useEffect(() => {
        fetchContactRooms();
    }, [user.id]);

    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll  ">
                <div>
                    <Sidebar />
                </div>
                <div className="border-r-2 ">
                    <div className="border-b-2 py-8 pl-4">
                        <h1 className="text-2xl font-bold">Message</h1>
                    </div>
                    <div className="overflow-scroll ">
                        {contacts &&
                            contacts?.length > 0 &&
                            contacts.map((contact) => (
                                <ChatRoomBox
                                    key={contact.id}
                                    username={contact.username}
                                    contactUserId={contact.id}
                                    profileImage={contact.profileImageUrl}
                                    lastMessageText={contact.lastMessageText}
                                    lastMessageTime={contact.lastMessageTime}
                                    onOpenChat={hldOpenMessage}
                                    className="bg-black"
                                />
                            ))}
                    </div>
                </div>

                {openChatRoom && <ChatMessageContainer />}
            </div>
        </div>
    );
}

export default MessagePage;
