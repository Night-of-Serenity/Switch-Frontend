import React from "react";
import SuggestFollow from "../components/common/SuggestFollow";


function SuggestContent() {
  return (
    <div>
      <div className=" p-4 ">
        <div className="border-2  rounded-xl ">
          <div className="border-b-2">
            <h1 className="text-xl font-semibold p-2 ml-1 ">Who to follow</h1>
          </div>
          <SuggestFollow />
          <SuggestFollow />
          <SuggestFollow />
          <SuggestFollow /> 
        </div>
      </div>
    </div>
  );
}

export default SuggestContent;
