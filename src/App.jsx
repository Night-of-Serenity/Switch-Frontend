import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import FeedContextProvider from "./context/FeedContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatContextProvider from "./context/ChatContext";

import Router from "./routes/Router";

function App() {

    return (
        <>
            <AuthContextProvider>
                <ChatContextProvider>
                    <FeedContextProvider>
                        <Router />
                        <ToastContainer position="top-center"  autoClose={2000} />
                </FeedContextProvider>
                </ChatContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;
