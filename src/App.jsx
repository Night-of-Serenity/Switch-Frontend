import { useState } from "react";

import "./App.css";
import GuestPage from "./pages/GuestPage";
import Footer from "./Common/Footer";

import Home from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import SettingPage from "./pages/SettingPage";
import MessagePage from "./pages/MessagePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      {/* <GuestPage /> */}
      {/* <Home /> */}
      {/* <ExplorePage /> */}
      {/* <SettingPage /> */}
      {/* <MessagePage /> */}
      <ProfilePage />
    </>
  );
}

export default App;
