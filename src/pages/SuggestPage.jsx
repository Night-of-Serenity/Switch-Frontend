import React from "react";
import Sidebar from "../components/Sidebar";
import TrendsForYou from "../components/TrendsForYou";
import SuggestFollow from "../components/common/SuggestFollow";
import SuggestContent from "../Common/SuggestContent";
import { Link } from "react-router-dom";

function SuggestPage() {
    return (
        <div className="h-screen  flex flex-col justify-between">
            <div className="min-h-full grid grid-cols-4 overflow-y-scroll">
                <div>
                    <Sidebar />
                </div>
                <div className="col-span-2 border-r-2">
                    {/* <div className="text-3xl font-bold my-4 pl-2 pb-2  border-b-2">
                        <div className="form-control pt-2 pr-2 pl-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input border-2 input-bordered w-full rounded-full md:w-auto"
                            />
                        </div>
                    </div> */}

                    <div className="pt-3 flex justify-center">
                        <p className="text-lg underline font-semibold ">
                            Welcome to Switch! Please follow step below before
                            set up your profile.
                        </p>
                    </div>
                    <SuggestContent />
                    <Link to={"/setting"}>
                        <div className="justify-center flex ">
                            <button
                                type="submit"
                                className="w-8/12 h-12  bg-stone-700 text-white text-lg font-bold rounded-full text-center hover:bg-Primary  flex justify-center items-center "
                                // onClick={hdlSubmit}
                            >
                                Next step to set up your profile
                            </button>
                        </div>
                    </Link>
                </div>
                <TrendsForYou />
            </div>
        </div>
    );
}

export default SuggestPage;
