/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { socket } from "../config/socketio";
import { useEffect, useState } from "react";
import * as chatApi from "../api/chat-api";

const ChatContext = createContext(null);

function ChatContextProvider({ children }) {
    const { user } = useAuth();
    // console.log("chat context-------->", user);
    const [contacts, setContacts] = useState([]);
    const [directMessages, setDirectMessages] = useState([]);
    const [selectContactId, setSelectContactId] = useState(null);
    const [isCreateNewChat, setIsCreateNewChat] = useState(false);
    const [newContactUser, setNewContactUser] = useState({});

    const sendMessage = (message, senderId, receiverId) => {
        console.log("send messsege sender", senderId);
        console.log("send message receiver", receiverId);
        const messageObj = {
            message: message,
            senderId,
            receiverId,
        };
        socket.emit("sendMessage", messageObj);
    };

    const fetchMessage = async (contactUserId) => {
        try {
            console.log("contact user id:", contactUserId);
            const res = await chatApi.fetchChatDirectMessages(contactUserId);
            if (res.data) {
                setSelectContactId(contactUserId);
                setDirectMessages(res.data);
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    const fetchContactRooms = async () => {
        try {
            const res = await chatApi.fetchContactRooms();
            if (res.data) {
                setContacts(res.data);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const createNewChat = (contactUser) => {
        setNewContactUser(contactUser);
        setIsCreateNewChat(true);
        console.log("new contact:", contactUser);
    };

    useEffect(() => {
        fetchContactRooms();
    }, []);

    useEffect(() => {
        if (Object.keys(user).length > 0) socket.connect();

        socket.on("receiveMessage", (input) => {
            const { message, senderId, receiverId } = input;
            if (
                (senderId === user.id && receiverId === selectContactId) ||
                (senderId === selectContactId && receiverId === user.id)
            ) {
                console.log("receive message:", input);
                const newMessage = {
                    textcontent: message,
                    senderId,
                    receiverId,
                };

                if (contacts.length) {
                    const findExistContact = contacts.find(
                        (contact) =>
                            contact.senderId === receiverId ||
                            contact.receiverId === receiverId
                    );

                    if (!findExistContact) {
                        const newContact = [...contacts];
                        newContact.push(newContactUser);
                        console.log(newContactUser);
                    }
                }

                setDirectMessages((messages) => {
                    console.log("new message", newMessage);
                    const newMessages = [...messages];
                    newMessages.push(newMessage);
                    // console.log("new messages", newMessage);
                    return newMessages;
                });
            }
        });

        return () => {
            socket.off("receiveMessage");
            socket.disconnect();
        };
    }, [user.id, socket.id]);

    const values = {
        sendMessage,
        contacts,
        fetchContactRooms,
        fetchMessage,
        directMessages,
        selectContactId,
        isCreateNewChat,
        setIsCreateNewChat,
        createNewChat,
        newContactUser,
    };

    return (
        <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    );
}

export default ChatContextProvider;

export const useChat = () => {
    return useContext(ChatContext);
};
