import React from "react";
import { FaAngleRight,FaHome  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcumb = ({mediaType,linkTo, mediaName}) => {
  return (
    <>
      <nav className="flex " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
          <li className="inline-flex items-center">
            <Link
              to={'/'}
              className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              <FaHome className="me-2 text-xl" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <FaAngleRight className=" text-xl" />
              <Link
                to={linkTo}
                className="ms-1 text-lg font-medium text-gray-700 hover:text-blue-600 md:ms-2 "
              >
                {mediaType}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
            <FaAngleRight className=" text-xl" />
              <span className="ms-1 text-lg font-medium text-gray-500 md:ms-2 ">
                {mediaName}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcumb;
