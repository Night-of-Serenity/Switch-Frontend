import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import FeedContextProvider from "./context/FeedContext";
import { ToastContainer,toast } from 'react-toastify';

import Router from "./routes/Router";

function App() {
    return (
        <>
            <AuthContextProvider>
                <FeedContextProvider>
                    <Router />
                    <ToastContainer position="top-center"  autoClose={1000} />
                </FeedContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;
