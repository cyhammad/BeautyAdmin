import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { db } from "../api/firebase-config";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./UI/Button";
import DatePicker from "./UI/DatePicker";

const AvailabilityTable = ({
  selectedSlot,
  setSelectedSlot,
  isEditing,
  setIsEditing,
  setIsAdding,
}) => {
  const { availability, updateAvailability, updateOffday, updateCheck } =
    useStateContext();
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");
  const [isOffday, setIsOffday] = useState(false);
  const [startTime, setStartTime] = useState("12:30");
  const [startZone, setStartZone] = useState("AM");
  const [endTime, setEndTime] = useState("12:30");
  const [endZone, setEndZone] = useState("PM");

  console.log(startTime);

  const appointmentsCollectionRef = collection(db, "weekstatus");

  const setAvailability = async (userId, start, end) => {
    await updateDoc(doc(appointmentsCollectionRef, userId), {
      bookingStart: start,
      bookingEnd: end,
    });
  };
  const setOffday = async (userId, offday) => {
    await updateDoc(doc(appointmentsCollectionRef, userId), {
      isOffday: offday,
    });
  };
  console.log(startZone);
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="">
        <div className="flex flex-row mb-0 xl:mb-4 items-center justify-between w-full">
          <h2 className="text-2xl sm:text-3xl text-primary font-semibold leading-tight">
            Availability
          </h2>
          <div className="text-sm -mt-4">
            <Button
              onClick={() => {
                setIsAdding(true);
              }}
            >
              Add Slot
            </Button>
          </div>
          {/* <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 md:space-y-0 justify-center">
              <input
                type="text"
                id='"form-subscribe-Filter'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full px-4 bg-secondary text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="name"
              />

              <button
                className="flex-shrink-0 px-4  text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div> */}
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="bg-secondary bg-opacity-20 h-[21rem] inline-block min-w-full shadow rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-zinc-700  scrollbar-track-black">
            <table className="min-w-full leading-normal">
              <thead className="">
                <tr className="">
                  <th
                    scope="col"
                    className="px-3 py-3 sm:px-5 sm:py-3  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 sm:px-5 sm:py-3  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    <p className="hidden sm:block">Booking Availability</p>
                    <p className="block sm:hidden">Availability</p>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 sm:px-5 sm:py-3  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    <div className="flex items-center justify-center sm:justify-evenly">
                      <p className="block sm:hidden">Actions</p>
                      <p className="hidden sm:block">Status</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className=" overflow-y-auto">
                <div className="w-20"></div>
                {availability.map((user) => {
                  const currentDate =
                    user?.date?.toDate()?.toLocaleDateString() || "";
                  return (
                    <tr key={user.id}>
                      <td className="px-5 py-2 border-b border-white border-opacity-50 text-sm">
                        <div className="flex items-center">
                          <div className="">
                            <p className="text-white whitespace-no-wrap w-full">
                              {currentDate}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-5 py-2  border-b border-white border-opacity-50 text-sm">
                        {selected === user.id ? (
                          <div className="flex justify-evenly gap-2">
                            <div className="flex mr-1">
                              <TimePicker
                                format="h:m"
                                clearIcon={null}
                                disableClock
                                onChange={(time) => {
                                  setStartTime(time + "" + startZone);
                                }}
                                value={startTime}
                              />
                              <button
                                onClick={() => {
                                  setStartZone(
                                    startZone === "AM" ? "PM" : "AM"
                                  );
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
                                  setEndTime(time + "" + endZone);
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
                            <select class="w-full rounded border appearance-none bg-transparent border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark text-base pl-3 pr-10 caret-black">
                              {user?.slots?.map((slot) => {
                                return (
                                  <option className="sm:flex text-dark hover:text-dark">
                                    <div className="text-sm">
                                      {slot.bookingStart}
                                    </div>
                                    -
                                    <div className="text-sm">
                                      {slot.bookingEnd}
                                    </div>
                                  </option>
                                );
                              })}
                            </select>
                            {/*    <div>{user.bookingStart}</div>-
                            <div>{user.bookingEnd}</div> */}
                          </p>
                        )}
                      </td>
                      <td className="px-1 sm:px-5 py-2 border-b border-white border-opacity-50 text-sm">
                        <div className="flex flex-col sm:flex-row gap-3 items-center justify-evenly">
                          {selected === user.id ? (
                            <div className="flex items-center justify-evenly">
                              <button
                                onClick={() => {
                                  setAvailability(user.id, startTime, endTime);
                                  updateAvailability(
                                    user.id,
                                    startTime,
                                    endTime
                                  );
                                  updateCheck();
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
                                  setSelected("");
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
                              {user.isOffday ? (
                                <button
                                  onClick={() => {
                                    // setSelected(user.id);
                                    setSelectedSlot(user);
                                    setIsEditing(true);
                                    console.log(selected);

                                    // setEditTime(true);
                                  }}
                                  disabled
                                  className="text-gray-700  bg-primary rounded-lg px-2 sm:px-4 py-1 disabled:opacity-50"
                                >
                                  Set Time
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    // setSelected(user.id);
                                    setSelectedSlot(user);
                                    setIsEditing(true);
                                    console.log(selected);

                                    // setEditTime(true);
                                  }}
                                  className="text-gray-700  bg-primary rounded-lg px-2 sm:px-4 py-1"
                                >
                                  Set Time
                                </button>
                              )}
                            </>
                          )}
                          {user.isOffday ? (
                            <button
                              onClick={() => {
                                setIsOffday(false);
                                setOffday(user.id, false);
                                updateOffday(user.id, false);
                                updateCheck();
                              }}
                              className="text-gray-700  bg-primary opacity-60 hover:bg-primary active:bg-primary rounded-lg px-2 sm:px-4 py-1"
                            >
                              Off Day
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setIsOffday(true);
                                setOffday(user.id, true);
                                updateOffday(user.id, true);
                                updateCheck();
                              }}
                              className="min-w-max text-gray-700  bg-primary hover:bg-primary active:bg-primary rounded-lg px-2 sm:px-4 py-1"
                            >
                              Work Day
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityTable;
