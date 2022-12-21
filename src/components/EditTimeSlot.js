import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import TimePicker from "react-time-picker";
import { db } from "../api/firebase-config";
import { useStateContext } from "../contexts/ContextProvider";
import DatePicker from "./UI/DatePicker";

export default function EditTimeSlot({
  selectedSlot,
  setSelectedSlot,
  isEditing,
  setIsEditing,
}) {
  const { updateCheck } = useStateContext();
  const [date, setDate] = useState(selectedSlot.date.toDate() || new Date());
  const [allSlots, setAllSlots] = useState([]);
  const [editTime, setEditTime] = useState(false);
  const [addSlot, setAddSlot] = useState(false);
  const [editSotId, setEditSlotId] = useState(null);
  const [startTime, setStartTime] = useState("12:30");
  const [startZone, setStartZone] = useState("AM");
  const [endTime, setEndTime] = useState("12:30");
  const [endZone, setEndZone] = useState("PM");

  /*   const setAvailability = async (userId, start, end) => {
    await updateDoc(doc(appointmentsCollectionRef, userId), {
      bookingStart: start,
      bookingEnd: end,
    });
  }; */

  // console.log(startTime, startZone);
  // console.log(endTime, endZone);
  // console.log(date.getDate());

  useEffect(() => {
    if (selectedSlot.slots.length > 0) {
      setAllSlots(selectedSlot.slots);
    } else {
      setAllSlots([]);
    }
  }, [selectedSlot]);
  console.log(allSlots);

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="">
        <div className="flex flex-row mb-0 xl:mb-4 items-center justify-between w-full">
          <h2 className="text-2xl sm:text-3xl text-primary font-semibold leading-tight">
            Edit Time Slots
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="bg-secondary bg-opacity-20 h-[21rem] inline-block min-w-full shadow rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-black">
            <div className="p-4 text-base flex justify-between">
              <div className="w-full flex items-center justify-between sm:justify-evenly gap-2">
                <div>
                  {!addSlot && (
                    <button
                      onClick={() => {
                        setStartTime("12:30");
                        setStartZone("AM");
                        setEndTime("12:30");
                        setEndZone("PM");
                        setAddSlot(true);
                      }}
                      className="border-2 border-primary px-2 sm:px-4 py-1 rounded-md bg-primary text-dark"
                    >
                      Add Slot
                    </button>
                  )}
                </div>
                <div className="space-x-4">
                  <button
                    onClick={async () => {
                      console.log(allSlots);
                      const appointmentsCollectionRef = collection(
                        db,
                        "weekstatus"
                      );
                      if (
                        !editTime &&
                        !addSlot &&
                        date !== null &&
                        allSlots.length > 0
                      ) {
                        const selectedDate = `${date.getDate()}/${
                          date.getMonth() + 1
                        }/${date.getFullYear()}`;
                        // console.log(selectedDate);
                        await updateDoc(
                          doc(appointmentsCollectionRef, selectedSlot.id),
                          {
                            slots: allSlots,
                            date: date,
                            dateFormat: selectedDate,
                          }
                        );
                        updateCheck();
                        setIsEditing(false);
                      }
                    }}
                    className="text-base border-2 border-primary px-2 sm:px-4 py-1 rounded-md bg-primary text-dark"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                    }}
                    className="text-base border-2 border-primary px-2 sm:px-4 py-1 rounded-md bg-primary text-dark"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly">
              <p className="text-lg fontsemibold"> Date: </p>
              <div className="-mt-8">
                <DatePicker date={date} setDate={setDate} />
              </div>
            </div>
            <div className="p-4 text-base h-52 overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {allSlots?.map((slot, index) => {
                return (
                  <div className="flex justify-between sm:justify-evenly border-b-1 border-b-white  border-opacity-50">
                    <div className="px-3 sm:px-5 py-2 text-sm">
                      {editTime && slot.id === editSotId.id ? (
                        <div className="flex justify-evenly gap-2">
                          <div className="flex mr-1">
                            <TimePicker
                              format="h:m"
                              clearIcon={null}
                              disableClock
                              onChange={(time) => {
                                setStartTime(time);
                              }}
                              value={startTime}
                            />
                            <button
                              onClick={() => {
                                setStartZone(startZone === "AM" ? "PM" : "AM");
                              }}
                              className="z-20 -ml-6"
                            >
                              {startZone}
                            </button>
                          </div>
                          -
                          <div className="flex">
                            <TimePicker
                              className=""
                              format="h:m"
                              clearIcon={null}
                              disableClock
                              onChange={(time) => {
                                setEndTime(time);
                              }}
                              value={endTime}
                            />
                            <button
                              onClick={() => {
                                setEndZone(endZone === "PM" ? "AM" : "PM");
                              }}
                              className="z-20 -ml-6"
                            >
                              {endZone}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="flex gap-1 text-white whitespace-no-wrap">
                          <div>{slot?.bookingStart}</div>-
                          <div>{slot?.bookingEnd}</div>
                        </p>
                      )}
                    </div>
                    <div className="px-1 sm:px-5 py-2 text-sm">
                      <div className="flex gap-3 items-center justify-evenly">
                        {editTime && slot.id === editSotId.id ? (
                          <div className="flex items-center justify-evenly">
                            <button
                              onClick={() => {
                                allSlots.forEach((element) => {
                                  if (element.id === editSotId.id) {
                                    element.bookingStart =
                                      startTime + startZone;
                                    element.bookingEnd = endTime + endZone;
                                  }
                                });
                                updateCheck();
                                setEditTime(false);
                              }}
                              className="mr-6 text-white hover:text-blue-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>

                            <button
                              onClick={() => {
                                setEditTime(false);
                              }}
                              className=" text-white hover:text-red-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                setEditSlotId(slot);
                                console.log(slot);

                                setEditTime(true);
                              }}
                              className="text-gray-700  bg-primary rounded-lg px-2 sm:px-4 py-1"
                            >
                              Edit Slot
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => {
                            setAllSlots(
                              allSlots.filter((item) => item.id !== slot.id)
                            );
                          }}
                          className="text-gray-700  bg-primary hover:bg-primary active:bg-primary rounded-lg px-2 sm:px-4 py-1"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {addSlot ? (
                <div className="flex">
                  <div className="px-3 sm:px-5 py-2 text-sm">
                    <div className="flex justify-evenly gap-2">
                      <div className="flex mr-1">
                        <TimePicker
                          format="h:m"
                          clearIcon={null}
                          disableClock
                          onChange={(time) => {
                            setStartTime(time);
                          }}
                          value={startTime}
                        />
                        <button
                          onClick={() => {
                            setStartZone(startZone === "AM" ? "PM" : "AM");
                          }}
                          className="z-20 -ml-6"
                        >
                          {startZone}
                        </button>
                      </div>
                      -
                      <div className="flex">
                        <TimePicker
                          className=""
                          format="h:m"
                          clearIcon={null}
                          disableClock
                          onChange={(time) => {
                            setEndTime(time);
                          }}
                          value={endTime}
                        />
                        <button
                          onClick={() => {
                            setEndZone(endZone === "PM" ? "AM" : "PM");
                          }}
                          className="z-20 -ml-6"
                        >
                          {endZone}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 sm:px-5 py-2 border-b border-white border-opacity-50 text-sm">
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-evenly">
                      <button
                        onClick={() => {
                          allSlots.push({
                            id: Date.now(),
                            bookingStart: startTime + startZone,
                            bookingEnd: endTime + endZone,
                          });

                          setAddSlot(false);
                        }}
                        className="text-gray-700  bg-primary rounded-lg px-2 sm:px-4 py-1"
                      >
                        Add
                      </button>

                      <button
                        onClick={() => {
                          setAddSlot(false);
                        }}
                        className="text-gray-700  bg-primary hover:bg-primary active:bg-primary rounded-lg px-2 sm:px-4 py-1"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid place-content-center">
                  {/* <button
                    onClick={() => {
                      setStartTime("12:30");
                      setStartZone("AM");
                      setEndTime("12:30");
                      setEndZone("PM");
                      setAddSlot(true);
                    }}
                    className="border-2 border-primary px-4 py-2 rounded-md bg-primary text-dark"
                  >
                    Add Slot
                  </button> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
