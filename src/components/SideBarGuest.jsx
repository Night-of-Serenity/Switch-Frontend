import React from "react";
import LogoSideBar from "../Common/LogoSideBar";
function SideBarGuest() {
  return (
    <div>
      <div className="h-full ">
        <div className="flex flex-col h-full p-3 w-full items-center dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <LogoSideBar />
            </div>

            <div className="flex-1 font-semibold">
              <ul className="pt-2 pb-4  text-sm  ">
                {/* ******classname sidebar**** */}
                <li className=" hover:text-Primary rounded-md  text-sm leading-6 font-semibold hover:bg-gray-50">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                    <span className="text-xl">Explore</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarGuest;
