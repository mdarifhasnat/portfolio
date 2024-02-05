import React from "react";

const Nav3 = () => {
  return (
    <div className="">
      <nav className="border-gray-200 border-b-[.5px] dark:bg-gray-800 dark:border-gray- font-poppins font-semibold pt-2 pb-2 ">
        <div className="max-w-screen-l flex flex-wrap items-center justify-between mx-auto pl-2 pr-4 text-xs ">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <span className="self-center text-xs font-semibold whitespace-nowrap dark:text-white">
              Arif
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-2 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-700 md:dark:text-gray-700 dark:bg-gray-700 md:dark:bg-transparent hover:text-gray-900"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 md:p-0 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-700 md:dark:text-gray-700 dark:bg-gray-700 md:dark:bg-transparent hover:text-gray-900"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-700 md:dark:text-gray-700 dark:bg-gray-700 md:dark:bg-transparent hover:text-gray-900"
                  aria-current="page"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-700 md:dark:text-gray-700 dark:bg-gray-700 md:dark:bg-transparent hover:text-gray-900"
                  aria-current="page"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-700 md:dark:text-gray-700 dark:bg-gray-700 md:dark:bg-transparent hover:text-gray-900"
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav3;
