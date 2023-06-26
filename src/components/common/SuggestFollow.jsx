import React from "react";

function SuggestFollow({ userSuggest }) {
    return (
        <div>
            <div className=" items-start p-2 mt-2 mb-2 space-x-4 justify-self-center flex ">
                <img
                    src={userSuggest?.profileImageUrl}
                    alt=""
                    className="w-10 h-10 rounded-full dark:bg-gray-500"
                />
                <div className="w-64">
                    <div className="flex flex-row">
                        {/* <h2 className="text-sm font-semibold ">Leroy Jenkins &nbsp;</h2>   */}
                        <h2 className="text-sm font-semibold ">
                            {userSuggest?.username}
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-sm font-light ">
                            {userSuggest?.bio}
                        </h2>
                    </div>
                </div>
                <div className=" bg-Primary rounded-full px-3 py-1 text-white font-normal">
                    <button>Follow</button>
                </div>
            </div>
        </div>
    );
}

export default SuggestFollow;
