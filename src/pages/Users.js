import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Users = ({ rows }) => {
  const { users } = useStateContext();

  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="mt-[10vh] max-w-screen-lg container mx-auto px-4 sm:px-8">
      <div className="mb-10 sm:flex items-center justify-between w-full">
        <h2 className="text-3xl sm:text-4xl text-primary font-semibold leading-tight">
          Users
        </h2>
        <div className="mt-6 sm:mt-0 text-end">
          <form className="relative flex items-center md:flex-row w-full sm:w-fit md:space-x-3 md:space-y-0 ">
            <input
              type="text"
              className="text-white py-3 pl-2 pr-8 bg-transparent w-full sm:w-fit border-t-0 border-l-0 border-r-0 border-b-2 outline-none ring-0 focus:border-b-primary-dark focus:border-b-2 focus:ring-0"
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
        <div className="h-[70vh] bg-secondary bg-opacity-20 inline-block min-w-full shadow rounded-3xl overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          <table className="min-w-full leading-normal rounded-3xl">
            <thead className="">
              <tr className="">
                <th
                  scope="col"
                  className="px-3 py-3 sm:px-5 sm:py-3 border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-base sm:text-lg  font-normal"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 sm:px-5 sm:py-3   border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-base sm:text-lg   font-normal"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 sm:px-5 sm:py-3   border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-base sm:text-lg   font-normal"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 sm:px-5 sm:py-3   border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-base sm:text-lg   font-normal"
                >
                  Date Joined
                </th>
                {/* <th
                    scope="col"
                    className="px-5 py-3 py-3   border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 py-3   border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  ></th> */}
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {users.map((selected) => {
                let user = [];

                if (filterValue.length > 0) {
                  if (
                    selected.username
                      .toLowerCase()
                      .includes(filterValue.toLowerCase())
                  ) {
                    user.push(selected);
                  }
                } else {
                  user.push(selected);
                }

                return (
                  <>
                    {user.length > 0 && (
                      <tr key={user.id}>
                        <td className="px-5 py-3  border-b border-white border-opacity-50  text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className="block relative">
                                {/*  <img
                                    alt="profil"
                                    src="/images/person/8.jpg"
                                    className="mx-auto object-cover rounded-full h-10 w-10 "
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
                                {user[0]?.username}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3  border-b border-white border-opacity-50  text-sm">
                          <p className="text-white whitespace-no-wrap">
                            {user[0]?.contact}
                          </p>
                        </td>
                        <td className="px-5 py-3  border-b border-white border-opacity-50  text-sm">
                          <p className="text-white whitespace-no-wrap">
                            {user[0]?.email}
                          </p>
                        </td>
                        <td className="px-5 py-3  border-b border-white border-opacity-50  text-sm">
                          <p className="text-white whitespace-no-wrap">
                            12/09/2020
                          </p>
                        </td>

                        {/* <td className="px-5 py-3  border-b border-white border-opacity-50  text-sm">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td> */}
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

export default Users;
