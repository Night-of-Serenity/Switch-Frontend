import Sidebar from "../components/Sidebar";
import ChatRoomBox from "../components/chat/ChatRoomBox";
import ChatMessageContainer from "../components/chat/ChatMessageContainer";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { useChat } from "../context/ChatContext";

function MessagePage() {
    const [openChatRoom, setOpenChatRoom] = useState(false);
    const {
        contacts,
        fetchContactRooms,
        fetchMessage,
        isCreateNewChat,
        setIsCreateNewChat,
        newContactUser,
    } = useChat();
    // console.log(newContactUser);
    const { user } = useAuth();

    const getLastMessage = (contact) => {
        const SenderLastMessage =
            contact.Sender && contact.Sender.length > 0
                ? contact.Sender[contact.Sender.length - 1]
                : "";

        const ReceiverLastMessage =
            contact.Receiver && contact.Receiver.length > 0
                ? contact.Receiver[contact.Receiver.length - 1]
                : "";

        const lastMessage =
            new Date(SenderLastMessage.createdAt) >
            new Date(ReceiverLastMessage.createdAt)
                ? SenderLastMessage
                : ReceiverLastMessage;
        return lastMessage;
    };

    const hldOpenMessage = (contactUserId) => {
        fetchMessage(contactUserId);
        setOpenChatRoom(true);
    };

    useEffect(() => {
        return () => {
            setIsCreateNewChat(false);
        };
    }, []);

    useEffect(() => {
        fetchContactRooms();
    }, [user.id]);
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
                        {isCreateNewChat && (
                            <ChatRoomBox
                                key={newContactUser.id}
                                username={newContactUser.username}
                                contactUserId={newContactUser.id}
                                profileImage={newContactUser.profileImageUrl}
                                lastMessage=""
                                onOpenChat={hldOpenMessage}
                            />
                        )}
                        {contacts &&
                            contacts?.length &&
                            contacts.map((contact) => (
                                <ChatRoomBox
                                    key={contact.id}
                                    username={contact.username}
                                    contactUserId={contact.id}
                                    profileImage={contact.profileImageUrl}
                                    lastMessage={
                                        getLastMessage(contact).textcontent
                                    }
                                    lastMessageTime={
                                        getLastMessage(contact).createdAt
                                    }
                                    onOpenChat={hldOpenMessage}
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
