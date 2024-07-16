import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
<footer className="bg-white shadow dark:bg-slate-900 mt-6">
  <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:py-8">
    <div className="flex justify-between items-center">

      <Link to={"/"} className="flex items-center text-xl font-medium text-gray-900 dark:text-gray-200">
        <span className="bg-blue-600 p-2 text-white font-bold rounded-md">Mingle</span>
        <span className="bg-red-600 p-2 text-white font-bold rounded-md ">Movies</span>
      </Link>

      <ul className="flex flex-wrap justify-center items-center text-md font-medium text-gray-500 dark:text-gray-200 gap-3">
        <li>
          <Link to={'/'} className="hover:underline ">Home</Link>
        </li>
        <li>
          <Link to={'/movies'} className="hover:underline ">Movies</Link>
        </li>
        <li>
          <Link to={'/tvshow'} className="hover:underline text-nowrap">Tv Show</Link>
        </li>
        <li>
          <Link to={'/query'} className="hover:underline">Search</Link>
        </li>
      </ul>

    </div>

    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

    <div className="text-sm text-gray-500 sm:text-center dark:text-gray-200">
      © 2024 <Link to={'/'} className="hover:underline">MingleMovies™</Link>. All Rights Reserved.
    </div>

  </div>
</footer>

    </>
  )
}

export default Footer