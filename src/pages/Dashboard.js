import React, { useEffect, useState } from "react";

import curve2 from "../assets/images/curve2.png";
import flower from "../assets/images/flower.png";
import { Outlet } from "react-router-dom";
import Chat from "../components/chat/Chat";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HomeBackground from "../components/HomeBackground";
import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  const { unReadMessages } = useStateContext();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <>
      <div>
        <HomeBackground />
        <Sidebar
          open={open}
          setOpen={setOpen}
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
        />
        <Navbar
          open={open}
          setOpen={setOpen}
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
          setIsChatOpen={setIsChatOpen}
          isChatOpen={isChatOpen}
        />
        <div className="pt-14 md:pt-0 md:ml-40 relative overflow-auto ">
          <Outlet />
          <div className="hidden md:block fixed right-8 bottom-8">
            {isChatOpen ? (
              <Chat setIsChatOpen={setIsChatOpen} />
            ) : (
              <div
                onClick={() => {
                  setIsChatOpen(true);
                }}
                className="relative flex bg-opacity-90 hover:bg-opacity-100 items-center justify-center border-2 border-white hover:border-2 hover:border-primary bg-dark h-20 w-20 rounded-full hover:scale-110 hover:shadow-md hover:drop-shadow-lg hover:shadow-gray-600 transition-all duration-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-primary-dark group-hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                {unReadMessages > 0 && (
                  <div className="absolute grid place-content-center top-0 right-0 h-6 w-6 bg-red-500 rounded-full">
                    <p className="text-white font-medium">{unReadMessages}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
