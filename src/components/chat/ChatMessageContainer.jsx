import ChatRoomHeader from "./ChatRoomHeader";
import MessageOtherUser from "./MessageOtherUser";
import MessageUser from "./MessageUser";
import ChatMessageBar from "./ChatMessageBar";
import { useChat } from "../../context/ChatContext";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useRef } from "react";
export default function ChatMessageContainer() {
    const {
        contacts,
        selectContactId,
        directMessages,
        isCreateNewChat,
        newContactUser,
    } = useChat();
    const contactUser = isCreateNewChat
        ? newContactUser
        : contacts.find((user) => user.id === selectContactId);
    const { user } = useAuth();
    console.log(contactUser);
    console.log("messages:", directMessages);

    const chatRef = useRef(null);

    useEffect(() => {
        // chatRef.current.scrollTop = chatRef.current.scrollHeight;
        chatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
    }, [directMessages]);

    return (
        <div className="col-span-2 flex h-screen flex-col">
            <ChatRoomHeader contactUser={contactUser} />

            <div className="h-full  overflow-scroll ">
                {directMessages.length > 0 &&
                    directMessages.map((message) =>
                        message.senderId === user.id ? (
                            <MessageUser
                                key={message.id}
                                textcontent={message.textcontent}
                            />
                        ) : (
                            <MessageOtherUser
                                key={message.id}
                                textcontent={message.textcontent}
                            />
                        )
                    )}
                <div ref={chatRef}></div>
            </div>

            <ChatMessageBar />
        </div>
    );
}
