import React from "react";
import Chat from "./chat/Chat";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = (props) => {
  const { unReadMessages } = useStateContext();
  const location = useLocation();

  return (
    <div className="z-30 md:hidden fixed w-full flex items-center justify-between px-6 h-16 bg-light">
      <button
        onClick={() => {
          props.setOpen(!props.open);
          props.setShowBackdrop(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Link
        onClick={() => {
          props.setOpen(false);
          props.setShowBackdrop(false);
        }}
        to={"/chat"}
      >
        <div
          className={`${
            location.pathname === "/chat" ? "opacity-100" : "opacity-20"
          }relative text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
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
            <div className="absolute grid place-content-center top-2 right-4 h-5 w-5 bg-red-500 rounded-full">
              <p className="text-white text-sm font-medium">{unReadMessages}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
