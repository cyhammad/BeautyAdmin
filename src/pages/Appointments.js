import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../api/firebase-config";
import { useStateContext } from "../contexts/ContextProvider";

const Appointments = ({ rows }) => {
  const { users, appointments, updateAppointments, updateCheck } =
    useStateContext();

  const [filterValue, setFilterValue] = useState("");

  const setAppointment = async (userId, approved) => {
    const appointmentsCollectionRef = collection(db, "appointments");
    const data = doc(appointmentsCollectionRef, userId);
    await updateDoc(data, {
      isApproved: approved,
    });
  };

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="mt-[10vh] max-w-screen-lg container mx-auto px-4 sm:px-8">
      <div className="mb-10 flex flex-row items-center justify-between w-full">
        <h2 className="text-4xl text-primary font-semibold leading-tight">
          Appointments
        </h2>
        <div className="text-end">
          <form className="relative flex items-center md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 md:space-y-0 justify-center">
            <input
              type="text"
              className="text-white py-2 pl-2 pr-8 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 outline-none ring-0 focus:border-b-primary-dark focus:border-b-2 focus:ring-0"
              placeholder="Search"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <svg
              className="object-contain w-4 h-4 absolute right-2 text-inherit "
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
                fill="white"
              />
            </svg>

            {/* <button
                className="flex-shrink-0 px-4  text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filter
              </button> */}
          </form>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className=" h-[70vh] bg-secondary bg-opacity-20 inline-block min-w-full shadow rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-zinc-600  scrollbar-track-transparent">
          <table className=" min-w-full leading-normal">
            <thead className="">
              <tr className="">
                <th
                  scope="col"
                  className="px-5 py-2 text-center border-b-2 border-white border-opacity-50   text-white text-opacity-50 text-lg font-normal"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-2 text-center border-b-2 border-white border-opacity-50   text-white text-opacity-50 text-lg font-normal"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-5 py-2 text-center border-b-2 border-white border-opacity-50   text-white text-opacity-50 text-lg font-normal"
                >
                  Day
                </th>
                <th
                  scope="col"
                  className="px-5 py-2 text-center border-b-2 border-white border-opacity-50   text-white text-opacity-50 text-lg font-normal"
                >
                  Approval
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {appointments.map((user) => {
                let selectedUser = users?.filter(
                  (usr) => usr?.id === user?.userId
                );
                console.log(selectedUser);
                if (filterValue.length > 0) {
                  selectedUser = selectedUser.filter((selected) =>
                    selected.username
                      .toLowerCase()
                      .includes(filterValue.toLowerCase())
                  );
                }

                return (
                  <>
                    {user.isApproved === false && selectedUser.length > 0 && (
                      <tr>
                        {console.log(user)}
                        <td className="px-5 py-2 text-center border-b border-white border-opacity-50 text-sm">
                          <div className=" flex items-center">
                            <div className="flex-shrink-0">
                              <div className="block relative">
                                {/* <img
                                    alt="profil"
                                    src="/images/person/8.jpg"
                                    className="mx-auto object-cover rounded-full "
                                  /> */}
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-white whitespace-no-wrap">
                                {/* {user.userId} */}
                                {selectedUser[0]?.username}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-2 text-center border-b border-white border-opacity-50 text-sm">
                          <p className="text-white whitespace-no-wrap">
                            {user.appointment.toDate().toLocaleTimeString()}
                          </p>
                        </td>
                        <td className="px-5 py-2 text-center border-b border-white border-opacity-50 text-sm">
                          <p className="text-white whitespace-no-wrap">
                            {weekday[user.appointment.toDate().getDay()]}
                            {/* {new Date(user.appointment).toLocaleTimeString().} */}
                          </p>
                        </td>
                        <td className="px-5 py-2 text-center border-b border-white border-opacity-50 text-sm">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => {
                                setAppointment(user.id, true);
                                updateAppointments(user.id, true);
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
                                setAppointment(user.id, false);
                                updateAppointments(user.id, false);
                                updateCheck();
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
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
