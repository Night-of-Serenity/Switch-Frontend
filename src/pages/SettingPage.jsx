import React from "react";
import Sidebar from "../components/Sidebar";
import SettingContent from "../Common/SettingContent";
import SuggestContent from "../Common/SuggestContent";

function SettingPage() {
  return (
    <div className="h-screen  flex flex-col justify-between ">
      <div className="min-h-full grid grid-cols-4 overflow-y-scroll ">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-2 h-screen overflow-scroll border-r-2 ">
          <SettingContent />
        </div>
        <div>
          <SuggestContent />
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
