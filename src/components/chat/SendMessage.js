import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { db } from "../../api/firebase-config";
import { useLocation } from "react-router-dom";

// import { db, auth } from '../firebase'
// import { Input, Button } from '@material-ui/core'

function SendMessage({ setIsChatOpen, selectedUser, setOpenChat }) {
  const location = useLocation();
  const [enteredText, setEnteredText] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const msgData = [];

    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "messages"),
          where("senderId", "==", selectedUser?.id || ""),
          where("isRead", "==", false)
        );
        const fetchedData = await getDocs(q);
        fetchedData.forEach((doc) => {
          msgData.push({ ...doc.data(), id: doc.id });
        });
        setData(msgData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedUser]);
  console.log(data);

  useEffect(() => {
    const updateData = async () => {
      const collectionRef = collection(db, "messages");
      try {
        data.forEach((item) => {
          updateDoc(doc(collectionRef, item.id), { isRead: true });
        });
      } catch (error) {
        console.log(error);
      }
    };
    updateData();
  }, [data]);

  const q = query(
    collection(db, "messages"),
    where("chatId", "==", selectedUser?.id || ""),
    orderBy("createdAt"),
    limit(50)
  );
  const [messages] = useCollectionData(q, { idField: "chatId" });
  console.log(messages);

  async function sendMessage(e) {
    e.preventDefault();
    /* const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })  */
  }
  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between p-3 border-b border-zinc-700">
        <button
          className="block lg:hidden"
          onClick={() => {
            setOpenChat(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white hover:text-primary hover:scale-125 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex items-center">
          {selectedUser?.username ? (
            <>
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                alt="username"
              />
              <span className="block ml-2 font-bold text-white">
                {selectedUser?.username}
              </span>
              {/* <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span> */}
            </>
          ) : (
            <div className="object-cover w-10 h-10 rounded-full" />
          )}
        </div>
        {location.pathname !== "/chat" && (
          <button
            onClick={() => {
              setIsChatOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white hover:text-primary hover:rotate-90 hover:scale-125 transition-all duration-300 ease-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="relative w-full p-6 overflow-y-auto h-[34.25rem]">
        <ul className="space-y-2">
          {messages?.map((message) => {
            return (
              <>
                {message.senderId === "admin" ? (
                  <li className="h-fit flex justify-end">
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <span className="block">{message?.messageBody}</span>
                    </div>
                  </li>
                ) : (
                  <li className="h-fit flex justify-start">
                    <div className="relative max-w-xl px-4 py-2 text-white bg-gray-700  rounded shadow">
                      <span className="block">{message?.messageBody}</span>
                    </div>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between w-full p-3 border-t border-zinc-700">
        {/* <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button> */}

        <input
          type="text"
          placeholder="Message"
          className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none ring-1 ring-gray-100 border-2 border-gray-100 focus:ring-1 focus:ring-primary-dark focus:text-gray-700 focus:border-2 focus:border-primary-dark "
          name="message"
          required
          value={enteredText}
          onChange={(e) => setEnteredText(e.target.value)}
        />
        {/* <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button> */}
        <button
          onClick={async () => {
            if (enteredText.trim().length > 0 && selectedUser.username) {
              setEnteredText("");
              await addDoc(collection(db, "messages"), {
                senderId: "admin",
                recieverId: selectedUser?.id,
                messageBody: enteredText,
                chatId: selectedUser?.id,
                createdAt: serverTimestamp(),
              });
            }
          }}
          type="button"
        >
          <svg
            className="w-6 h-6 text-white hover:text-primary origin-center transition-all duration-300 ease-out transform rotate-90 hover:scale-125"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SendMessage;
