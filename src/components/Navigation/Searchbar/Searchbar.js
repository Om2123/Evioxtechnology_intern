import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
  

 

const Searchbar = (props) => {
  const { courseList } = props;
  const { onfetchCourses } = props;
  const [keyWord, setKeyWord] = useState(null);
  const [show, setShow] = useState(false);
  const typingTimeoutRef = useRef(null);

  if (typingTimeoutRef.current) {
    clearTimeout(typingTimeoutRef.current);
  }

  useEffect(() => {
    typingTimeoutRef.current = setTimeout(() => {
      // onfetchCourses("all", "GP08", keyWord);
      setShow(true);
    }, 500);
  }, [onfetchCourses, keyWord]);

  return (
    <div className="relative   rounded-md bg-opacity-15 hover:bg-opacity-25 mr-1 sm:mr-0 w-full sm:w-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m0 0l-6-6m6 6l-6-6m6 6H3"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        placeholder="Search..."
        className="py-2 pl-10 pr-4 block w-full rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200 focus:ring-opacity-50"
        onChange={(event) => setKeyWord(event.target.value)}
        aria-label="search"
      />
      {show && keyWord && courseList && courseList.length > 0 ? (
        <ul className="mt-1 border border-gray-300 rounded-md shadow-lg absolute left-0 w-full bg-white z-10">
          {courseList.map((course) => (
            <li key={course.maKhoaHoc}>
              <Link
                to={`/courses/${course.maKhoaHoc}`}
                onClick={() => setShow(false)}
                className="block hover:bg-blue-100 px-4 py-2 transition duration-150"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={course.hinhAnh}
                      alt={course.tenKhoaHoc}
                      className="h-8 w-8 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {course.tenKhoaHoc}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Searchbar;
