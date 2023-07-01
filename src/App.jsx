import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import FeedContextProvider from "./context/FeedContext";
import ChatContextProvider from "./context/ChatContext";

import Router from "./routes/Router";

function App() {
    return (
        <>
            <AuthContextProvider>
                <ChatContextProvider>
                    <FeedContextProvider>
                        <Router />
                    </FeedContextProvider>
                </ChatContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;
