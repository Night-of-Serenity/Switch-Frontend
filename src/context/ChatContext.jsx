/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { socket } from "../config/socketio";
import { useEffect, useState } from "react";

const ChatContext = createContext(null);

function ChatContextProvider({ children }) {
    const { user } = useAuth();
    console.log("chat context-------->", user);

    useEffect(() => {
        if (user) socket.connect();

        socket.on("receiveMessage", (input) => {
            console.log("ค่าที่ได้รับกลับมา:", input);
        });

        return () => {
            socket.disconnect();
        };
    }, [user, socket.id]);

    const sendMessage = (message, userId, receiver) => {
        console.log(userId);
        const objMessage = {
            message: message,
            senderId: userId,
            receiverId: receiver,
        };
        socket.emit("sendMessage", objMessage);
    };

    const values = { sendMessage };

    return (
        <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    );
}

export default ChatContextProvider;

export const useChat = () => {
    return useContext(ChatContext);
};
