/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import SendMessage from "../components/chat/SendMessage";

const ChatPage = ({ setIsChatOpen }) => {
  const [selectedUser, setSelectedUser] = useState([]);
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <div className="container mx-auto mt-6 p-4 sm:p-8">
        <div
          className={`min-w-full bg-light border rounded-2xl lg:grid lg:grid-cols-3 `}
        >
          <div
            className={`${openChat ? "hidden" : "block h-full"} lg:col-span-1`}
          >
            <ChatSidebar
              setIsChatOpen={setIsChatOpen}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              setOpenChat={setOpenChat}
              // openChat={openChat}
            />
          </div>
          {/*  <div className="block lg:hidden lg:col-span-1">
            <ChatSidebar
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div> */}

          {/* Page */}
          <div
            className={`${
              openChat ? "block " : "hidden"
            } lg:col-span-2 lg:block`}
          >
            <SendMessage
              setIsChatOpen={setIsChatOpen}
              setOpenChat={setOpenChat}
              selectedUser={selectedUser}
            />
          </div>
          {/* Chat */}
        </div>
      </div>
      {/* <Backdrop
        showBackdrop={showChatBackdrop}
        onClick={() => {
          setOpen(!open);
          setShowChatBackdrop(false);
        }}
      /> */}
    </>
  );
};

export default ChatPage;
