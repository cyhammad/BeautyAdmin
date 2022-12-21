import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../api/firebase-config";
import Backdrop from "./Backdrop";
import logo from "../assets/images/logo.png";

const Sidebar = (props) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed flex flex-col z-50 w-full max-w-fit  bg-light
        overflow-y-auto 
        ${
          props.open === true
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-20"
        } transition ease-out duration-300`}
      >
        <nav className="bg-light w-40 h-screen justify-between flex flex-col">
          <div className="flex flex-col items-center justify-center mt-10 mb-10">
            <Link to={"/"}>
              <img
                src={logo}
                className="object-contain -mt-10 mx-auto"
                alt=""
              />
            </Link>
            <div className="mt-8">
              <ul>
                <li className=" text-center">
                  <Link
                    onClick={() => {
                      props.setOpen(false);
                      props.setShowBackdrop(false);
                    }}
                    to={"/home"}
                  >
                    <span
                      className={`${
                        location.pathname === "/home"
                          ? "opacity-100"
                          : "opacity-20"
                      } text-primary hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  <Link
                    onClick={() => {
                      props.setOpen(false);
                      props.setShowBackdrop(false);
                    }}
                    to={"/approved-appointments"}
                  >
                    <span
                      className={`${
                        location.pathname === "/approved-appointments"
                          ? "opacity-100"
                          : "opacity-20"
                      } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  <Link
                    onClick={() => {
                      props.setOpen(false);
                      props.setShowBackdrop(false);
                    }}
                    to={"/users"}
                  >
                    <span
                      className={`${
                        location.pathname === "/users"
                          ? "opacity-100"
                          : "opacity-20"
                      } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  <Link
                    onClick={() => {
                      props.setOpen(false);
                      props.setShowBackdrop(false);
                    }}
                    to={"/admin"}
                  >
                    <span
                      className={`${
                        location.pathname === "/admin"
                          ? "opacity-100"
                          : "opacity-20"
                      } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  {/* <Link
                    onClick={() => {
                      props.setOpen(false);
                      props.setShowBackdrop(false);
                    }}
                    to={"/chat"}
                  >
                    <span
                      className={`${
                        location.pathname === "/chat"
                          ? "opacity-100"
                          : "opacity-20"
                      } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
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
                    </span>
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8 grid place-content-center ">
            <Link
              onClick={async () => {
                await signOut(auth);
              }}
              to={"/login"}
            >
              <span
                className={`${
                  location.pathname === "/login" && "opacity-100"
                } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </nav>
      </div>
      <Backdrop
        showBackdrop={props.showBackdrop}
        onClick={() => {
          props.setOpen(!props.open);
          props.setShowBackdrop(false);
        }}
      />
      {/* Mobile Sidebar */}

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed w-[90%] max-w-[200px] lg:max-w-[280px]  mx-auto">
        <div className="hidden sm:flex sm:flex-col sm:gap-12 sm:text-3xl sm:min-h-full sm:max-w-72">
          <div className="w-full max-w-[180px]">
            <nav className="bg-light w-40 h-screen justify-between flex flex-col">
              <div className="flex flex-col items-center justify-center mt-10 mb-10">
                <Link to={"/"}>
                  <img
                    src={logo}
                    className="object-contain mb-3 mx-auto"
                    alt=""
                  />
                </Link>
                <div className="mt-4 ">
                  <ul>
                    <li className="my-16 text-center">
                      <Link to={"/home"}>
                        <span
                          className={`${
                            location.pathname === "/home"
                              ? "opacity-100"
                              : "opacity-20"
                          } text-primary hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="my-16 text-center">
                      <Link to={"/approved-appointments"}>
                        <span
                          className={`${
                            location.pathname === "/approved-appointments"
                              ? "opacity-100"
                              : "opacity-20"
                          } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="my-16 text-center">
                      <Link to={"/users"}>
                        <span
                          className={`${
                            location.pathname === "/users"
                              ? "opacity-100"
                              : "opacity-20"
                          } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="my-16 text-center">
                      <Link to={"/admin"}>
                        <span
                          className={`${
                            location.pathname === "/admin"
                              ? "opacity-100"
                              : "opacity-20"
                          } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4 grid place-content-center ">
                <Link
                  onClick={async () => {
                    await signOut(auth);
                  }}
                  to={"/login"}
                >
                  <span
                    className={`${
                      location.pathname === "/login" && "opacity-100"
                    } text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
