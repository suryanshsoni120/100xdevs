import { useState } from "react";
import { SideBarContainer } from "./SideBarContainer";
import { Toggle } from "./Toggle";
import { TopBar } from "./TopBar";
import { Outerdiv } from "../transactionContainer/Outerdiv";

export const MainBar = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div>
      <div className="flex">
        {expand ? (
          <div
            onClick={() => setExpand(!expand)}
            className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75  h-svh"
          ></div>
        ) : null}
        <div className="w-full flex flex-col xl:ml-72">
          <div className={`${expand ? "" : "fixed "} shadow-md bg-white`}>
            <div
              onClick={() => setExpand(!expand)}
              className="absolute m-5 mt-7 xl:hidden "
            >
              <Toggle />
            </div>
            <div className=" w-screen xl:max-w-screen-lg xl:ml-20 xl:mr-10  ">
              <TopBar />
            </div>
          </div>
          <div className="mt-24 bg-gray-100">
            <Outerdiv />
          </div>
        </div>
        <div
          className={` fixed  inset-0 overflow-hidden transition-all ${
            expand ? "w-96" : "w-0"
          } xl:w-96`}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <SideBarContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
