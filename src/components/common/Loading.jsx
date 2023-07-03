import { Transition } from "@headlessui/react";
import { useState, CSSProperties } from "react";
import { ClimbingBoxLoader, DotLoader, RotateLoader,HashLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";



// const override  = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "orange",
// };

const color = "#A872EE"

function Spinner({ loading } ) {
  return (
    <Transition
      show={loading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed flex bg-black bg-opacity-30 w-full h-screen top-0 left-0  flex-col items-center justify-center z-20 }`}
      >
        {/* <div className="w-12 h-12  inline-block border-4 border-solid border-sdprimary-300  rounded-full animate-spin border-t-transparent"></div> */}
        <HashLoader
        color={color}
        margin = {2}
        loading={loading}
        // cssOverride={}
        size={50}
        speedMultiplier = {1}
     
      />
        <span className="font-light mt-8 text-white">Loading...</span>
      </div>
    </Transition>
  );
}

export default Spinner;
