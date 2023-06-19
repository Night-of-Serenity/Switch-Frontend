import React from "react";
import LogoSideBar from "../Common/LogoSideBar";

function GuestPage() {
  return (
    <div className="grid grid-cols-4">
      <div>
        <LogoSideBar />
      </div>
      <div className=" col-span-2">
        <h1 className="text-3xl font-bold mt-4">Explore</h1>
      </div>
      <div>t3</div>
    </div>
  );
}

export default GuestPage;
