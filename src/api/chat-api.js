import axios from "../config/axios";

export const fetchContactRooms = () =>
    axios.get("/chat/fetchdirectmessagecontacts");

export const fetchChatDirectMessages = (contactUserId) =>
    axios.get(`/chat/fetchdirectmessags/${contactUserId}`);
