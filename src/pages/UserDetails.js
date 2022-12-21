import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import Button from "../components/UI/Button";
import { useAuth } from "../contexts/AuthContext";

const UserDetails = ({ rows }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { currentUser, changePassword, changeEmail, changeProfile } = useAuth();

  const updateProfile = async () => {
    setError("");
    try {
      if (userName.length > 0) {
        await changeProfile(userName);
      }
      if (email.length > 0) {
        await changeEmail(email);
      }
      if (password.length > 0) {
        await changePassword(password);
      }
    } catch (error) {
      console.log(error);
      setIsEditing(false);
      setError(error.message);
    }
    setUserName("");
    setEmail("");
    setPassword("");
  };

  console.log(currentUser);

  return (
    <div className="mt-[10vh] max-w-screen-lg container mx-auto px-4 sm:px-8  ">
      <div className="mb-4 md:mb-10 flex flex-col md:flex-row gap-6 md:gap-6 items-center justify-between w-full">
        <h2 className="text-4xl text-primary font-semibold leading-tight">
          Admin Profile
        </h2>
        <div className="text-end">
          <div className="relative flex items-center md:flex-row w-full md:w-full max-w-sm space-x-8 md:space-x-4 md:space-y-0 justify-center">
            {isEditing ? (
              <>
                <Button
                  onClick={() => {
                    updateProfile();
                    setIsEditing(false);
                  }}
                  type={"button"}
                >
                  <p className="text-dark font-medium">Update Profile</p>
                </Button>
                <Button
                  onClick={() => {
                    setIsEditing(false);
                  }}
                  type={"button"}
                >
                  <p className="text-dark font-medium">Cancel</p>
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setError("");
                  setIsEditing(true);
                }}
                type={"button"}
              >
                <p className="text-dark font-medium">Edit Profile</p>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="h-[70vh] inline-block min-w-full shadow overflow-auto scrollbar-thin scrollbar-thumb-zinc-600  scrollbar-track-transparent">
          <div className="flex flex-col p-6 rounded-xl bg-dark bg-opacity-40">
            <div>
              <img className="object-contain w-64" src={logo} alt="" />
            </div>
            <div className="border-t-2 border-light flex flex-col">
              <div className="p-4 sm:flex items-center gap-4">
                <p className=" w-[30%] md:w-[20%] lg:w-[10%] text-xl text-primary font-medium">
                  Name
                </p>
                {!isEditing ? (
                  <p className="pt-2 sm:pl-4 sm:border-l-2 sm:border-light w-[30%] md:w-[20%] lg:w-[10%] text-xl text-white font-normal">
                    {currentUser.displayName}
                  </p>
                ) : (
                  <input
                    type="text"
                    className="w-[70%] md:w-[80%] lg:w-[90%] text-white py-2 pl-2 pr-8 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 outline-none ring-0 focus:border-b-primary-dark focus:border-b-2 focus:ring-0"
                    // placeholder={currentUser.displayName}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                )}
              </div>
              <div className="p-4 sm:flex items-center gap-4">
                <p className="w-[30%] md:w-[20%] lg:w-[10%] text-xl text-primary font-medium">
                  Email
                </p>

                {!isEditing ? (
                  <p className="pt-2 sm:pl-4 sm:border-l-2 sm:border-light w-[30%] md:w-[20%] lg:w-[10%] text-xl text-white font-normal">
                    {currentUser.email}
                  </p>
                ) : (
                  <input
                    type="text"
                    className="w-[70%] md:w-[80%] lg:w-[90%] text-white py-2 pl-2 pr-8 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 outline-none ring-0 focus:border-b-primary-dark focus:border-b-2 focus:ring-0"
                    // placeholder={currentUser.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                )}
              </div>
              {error && (
                <div
                  onClick={() => {
                    setError("");
                  }}
                  className="p-4 sm:flex items-center gap-4 border border-red-500"
                >
                  <p className="text-lg text-red-500">
                    Something went wrong: {error}
                  </p>
                </div>
              )}
              {isEditing && (
                <>
                  <div className="p-4 sm:flex items-center gap-4">
                    <p className="w-[30%] md:w-[20%] lg:w-[10%] text-xl text-primary font-medium">
                      Password
                    </p>

                    <input
                      type="text"
                      className="w-[70%] md:w-[80%] lg:w-[90%] text-white py-2 pl-2 pr-8 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 outline-none ring-0 focus:border-b-primary-dark focus:border-b-2 focus:ring-0"
                      placeholder=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 p-4 sm:flex items-center gap-4 border rounded-md border-zinc-500">
                    <p className="text-lg text-zinc-500">
                      Note: Leave the field empty that you donot wish to update.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
