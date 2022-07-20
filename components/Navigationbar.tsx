import { useState } from "react";

const Navigationbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className=" absolute w-screen border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto xl:px-12">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Your Links
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={
            "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          }
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={"w-full md:block md:w-auto" + (!navbarOpen && " hidden")}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-lg text-gray-700 hover:bg-gray-500 hover:text-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-500 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-lg text-gray-700 hover:bg-gray-500 hover:text-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-500 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-lg text-gray-700 hover:bg-gray-500 hover:text-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-500 md:p-0"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
