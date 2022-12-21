import React from "react";

const Table = ({ header }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="">
        <div className="flex flex-row mb-1 sm:mb-0 items-center justify-between w-full">
          <h2 className="text-2xl text-primary leading-tight">{header}</h2>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 md:space-y-0 justify-center">
              <input
                type="text"
                id='"form-subscribe-Filter'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full  px-4 bg-secondary text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Search"
              />

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
          <div className=" inline-block min-w-full shadow rounded-3xl overflow-hidden">
            <table className=" min-w-full leading-normal">
              <thead>
                <tr className="">
                  <th
                    scope="col"
                    className="px-5 py-3 bg-secondary bg-opacity-20  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-secondary bg-opacity-20  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-secondary bg-opacity-20  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-secondary bg-opacity-20  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  >
                    status
                  </th>
                  {/*  <th
                    scope="col"
                    className="px-5 py-3 bg-secondary bg-opacity-20  border-b-2 border-white border-opacity-50  text-white text-opacity-50  text-left text-sm uppercase font-normal"
                  ></th> */}
                </tr>
              </thead>
              <div className=""></div>
              <tbody className="">
                <tr>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/8.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">12/09/2020</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white  rounded-full"
                      ></span>
                      <span className="text-gray-600 relative">active</span>
                    </span>
                  </td>
                  {/* <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
                <tr>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/9.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">Designer</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white rounded-lg"
                      ></span>
                      <span className="text-gray-600 relative">active</span>
                    </span>
                  </td>
                  {/* <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
                <tr>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/10.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">Developer</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">02/10/2018</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white  rounded-full"
                      ></span>
                      <span className="text-gray-600 relative">active</span>
                    </span>
                  </td>
                  {/* <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
                <tr>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">User</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">23/09/2010</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white  rounded-full"
                      ></span>
                      <span className="text-gray-600 relative">active</span>
                    </span>
                  </td>
                  {/* <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
                <tr>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">User</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">23/09/2010</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white  rounded-full"
                      ></span>
                      <span className="text-gray-600 relative">active</span>
                    </span>
                  </td>
                  {/* <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
                <tr>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">User</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">23/09/2010</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white  rounded-full"
                      ></span>
                      <span className="text-gray-600 relative">active</span>
                    </span>
                  </td>
                  {/* <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
                <tr>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">User</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <p className="text-white whitespace-no-wrap">23/09/2010</p>
                  </td>
                  <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white  rounded-full"
                      ></span>
                      <span className="text-gray-600 relative">active</span>
                    </span>
                  </td>
                  {/* <td className="px-5  border-b border-white border-opacity-50 bg-secondary bg-opacity-20 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
