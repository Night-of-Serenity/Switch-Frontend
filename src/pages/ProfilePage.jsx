import React from "react";
import Sidebar from "../components/Sidebar";

function ProfilePage() {
  return (
    <div className="h-screen  flex flex-col justify-between">
      <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
        <div>
          <Sidebar />
        </div>
        <div className=" col-span-2 h-screen overflow-scroll">t2</div>
        <div>t3</div>
      </div>
    </div>
  );
}

export default ProfilePage;
