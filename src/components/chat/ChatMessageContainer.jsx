import ChatRoomHeader from "./ChatRoomHeader";
import MessageOtherUser from "./MessageOtherUser";
import MessageUser from "./MessageUser";
import ChatMessageBar from "./ChatMessageBar";
import { useChat } from "../../context/ChatContext";
import { useAuth } from "../../context/AuthContext";
export default function ChatMessageContainer() {
    const { contacts, selectContactId, directMessages } = useChat();
    const contactUser = contacts.find((user) => user.id === selectContactId);
    const { user } = useAuth();
    console.log("messages:", directMessages);
    return (
        <div className="col-span-2 border-l-2 flex flex-col">
            <ChatRoomHeader contactUser={contactUser} />
            <div className="h-full  overflow-scroll">
                {directMessages.map((message) =>
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
            </div>
            <ChatMessageBar />
        </div>
    );
}
