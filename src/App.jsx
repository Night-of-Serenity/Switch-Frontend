import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import FeedContextProvider from "./context/FeedContext";

import Router from "./routes/Router";

function App() {
    return (
        <>
            <AuthContextProvider>
                <FeedContextProvider>
                    <Router />
                </FeedContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;
