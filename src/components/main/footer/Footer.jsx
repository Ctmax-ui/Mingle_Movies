import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    

<footer className="bg-white  shadow dark:bg-slate-900 mt-6">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <Link
              to={"/"}
              className="title-font font-medium items-cente header-logo text-xl "
            >
              <span className="bg-blue-600 p-2 text-white font-bold rounded-s-md">
              Mingle
              </span>
              <span className="bg-red-600 p-2 text-white font-bold rounded-e-md">
              Movies
              </span>
            </Link>

            <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-200 ">
                <li>
                    <Link to={'/'} className="hover:underline me-4 md:me-6">Home</Link>
                </li>
                <li>
                    <Link to={'/movies'} className="hover:underline me-4 md:me-6">Movies</Link>
                </li>
                <li>
                    <Link to={'/tvshow'} className="hover:underline me-4 md:me-6">Tv Show</Link>
                </li>
                <li>
                    <Link to={'/query'} className="hover:underline">Search</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-200">© 2024 <Link to={'/'} className="hover:underline">MingleMovies™</Link>. All Rights Reserved.</span>
    </div>
</footer>


    </>
  )
}

export default Footer