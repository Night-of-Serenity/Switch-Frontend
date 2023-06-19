import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GuestPage from "./pages/GuestPage";
import Footer from "./Common/Footer";

function App() {
  return (
    <>
      <div className="h-screen  flex flex-col justify-between ">
        <GuestPage />

        <Footer />
      </div>
    </>
  );
}

export default App;
