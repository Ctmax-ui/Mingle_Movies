import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
        <header
          className="text-gray-600 h-auto body-font w-full z-20 bg-slate-100"
          id="header"
        >
          <div className="container max-w-[1140px] mx-auto flex flex-wrap px-3 flex-col md:flex-row items-center ">
            <div className="m-4 p-1 h-full">
              <Link
                to={"/"}
                className="title-font font-medium items-cente header-logo text-xl "
              >
                <span className="bg-blue-600 p-2 text-white font-bold rounded-md">
                  Mingle
                </span>
                <span className="bg-red-600 p-2 text-white font-bold rounded-md">
                  Movies
                </span>
              </Link>
            </div>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link
                to={"/"}
                className={`mr-5 text-lg font-bold hover:text-gray-900 hover:border-slate-600 border-b-2  ${
                  pathname === "/" ? "text-black  border-slate-600" : " border-transparent"
                }`}
              >
                Home
              </Link>
              <Link
                to={"movies/"}
                className={`mr-5 text-lg font-bold hover:text-gray-900 hover:border-slate-600 border-b-2  ${
                  pathname === "/movies/" ? "text-black border-b-2 border-slate-600" : " border-transparent"
                }`}
              >
                Movies
              </Link>
              <Link
                to={"tvshow/"}
                className={`mr-5 text-lg font-bold hover:text-gray-900 hover:border-slate-600 border-b-2  ${
                  pathname === "/tvshow/" ? "text-black border-b-2 border-slate-600" : " border-transparent"
                }`}
              >
                TV-Shows
              </Link>
              <Link
                to={"actors/"}
                className={`mr-5 text-lg font-bold hover:text-gray-900 hover:border-slate-600 border-b-2  ${
                  pathname === "/actors/" ? "text-black border-b-2 border-slate-600" : " border-transparent"
                }`}
              >
                Popular Stars
              </Link>
            </nav>
            <Link
              to={"/query/"}
              className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0 text-xl"
            >
              Search
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </header>
    </>
  );
};

export default Header;
