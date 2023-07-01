/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { socket } from "../config/socketio";
import { useEffect } from "react";

const ChatContext = createContext(null);

function ChatContextProvider({ children }) {
    const { user } = useAuth();
    console.log("chat context-------->", user);

    useEffect(() => {
        if (user) socket.connect();
    }, [user]);
    const values = {};
    return (
        <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    );
}

export default ChatContextProvider;

export const useChat = () => {
    return useContext(ChatContext);
};
