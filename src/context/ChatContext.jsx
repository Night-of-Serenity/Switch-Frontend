/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { socket } from "../config/socketio";
import { useEffect, useState } from "react";
import * as chatApi from "../api/chat-api";
import { getAccessToken } from "../utils/localstroge";

const ChatContext = createContext(null);

function ChatContextProvider({ children }) {
    const { user } = useAuth();
    // console.log("chat context-------->", user);
    const [contacts, setContacts] = useState([]);
    const [directMessages, setDirectMessages] = useState([]);
    const [selectContactId, setSelectContactId] = useState(null);
    const [isCreateNewChat, setIsCreateNewChat] = useState(false);
    const [newContactUser, setNewContactUser] = useState({});
    const [openChatRoom, setOpenChatRoom] = useState(false);

    const hldOpenMessage = (contactUserId) => {
        fetchMessage(contactUserId);
        setOpenChatRoom(true);
    };

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
                if (isCreateNewChat && newContactUser) {
                    addNewContact(res.data);
                } else {
                    setContacts(res.data);
                }
            } else throw new Error("no response data from fetching contacts");
        } catch (err) {
            console.log(err.message);
        }
    };

    const addNewContact = (fetchedConstacts) => {
        const newContact = {
            ...newContactUser,
            lastMessageText: "",
            lastMessageTime: new Date().toLocaleString(),
        };
        if (fetchedConstacts.length > 0) {
            // find exist newcontact
            const existNewcontact = contacts.find(
                (contact) => contact.id === newContactUser.id
            );

            // case already exist
            if (existNewcontact) {
                fetchMessage(newContactUser.id);
                setOpenChatRoom(true);
            } else {
                // case new contact not exist yet
                setContacts((prevContacts) => [newContact, ...prevContacts]);
                fetchMessage(newContactUser.id);
                setOpenChatRoom(true);
            }
        } else {
            setContacts([newContact]);
            setSelectContactId(newContactUser.id);
            setDirectMessages([]);
            setOpenChatRoom(true);
        }
    };

    const createNewChat = (contactUser) => {
        setNewContactUser(contactUser);
        setIsCreateNewChat(true);
    };

    const fetchNewMessageFromOtherUser = async (contactUserId) => {
        try {
            const res = await chatApi.fetchNewMessage(contactUserId);
            console.log("..........res.data.............", res.data);
            return res.data;
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchContactRooms();
    }, []);

    useEffect(() => {
        const lenght = Object.keys(user).length;
        if (lenght > 0) {
            console.log("connect");
            socket.auth = { accesstoken: getAccessToken() };
            socket.connect();
        }

        socket.on("receiveMessage", (input) => {
            const { message, senderId, receiverId } = input;
            // const exitContact = contacts.find((contact) => {
            //     contact.id == receiverId || contact.id == senderId;
            // });

            // if (!exitContact) {
            //     const getMessage = async () => {
            //         const newContact = [...contacts];
            //         const result = await fetchNewMessageFromOtherUser(
            //             receiverId
            //         );
            //         newContact.unshift(result);
            //         setContacts(newContact);
            //         console.log("-----------------", newContact);
            //     };
            //     getMessage();
            // }

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
        fetchNewMessageFromOtherUser,
        hldOpenMessage,
        openChatRoom,
        setOpenChatRoom,
    };

    return (
        <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    );
}

export default ChatContextProvider;

export const useChat = () => {
    return useContext(ChatContext);
};
