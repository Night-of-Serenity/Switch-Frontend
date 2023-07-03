import { io } from "socket.io-client";
import { BACKEND_URL } from "./env";
// import { getAccessToken } from "../utils/localstroge";

export const socket = io(BACKEND_URL, {
    autoConnect: false,
    reconnection: false,
    // auth: {
    //     accesstoken: getAccessToken(),
    // },
});
