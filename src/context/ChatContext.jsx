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

    const receiveMessage = () => {
        socket.on("receiveMessage", (input) => {
            console.log("receive message:", input);
        });
    };

    useEffect(() => {
        if (user) socket.connect();

        receiveMessage();

        return () => {
            socket.disconnect();
        };
    }, [user, socket]);

    const values = {
        sendMessage,
        contacts,
        fetchContactRooms,
        fetchMessage,
        directMessages,
        selectContactId,
    };

    return (
        <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    );
}

export default ChatContextProvider;

export const useChat = () => {
    return useContext(ChatContext);
};
