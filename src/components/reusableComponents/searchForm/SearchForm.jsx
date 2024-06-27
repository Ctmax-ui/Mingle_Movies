import React, { useState, useEffect } from "react";

const SearchForm = ({ onChange }) => {
  const [formData, setFormData] = useState({
    category: "default",
    mediaRef: "",
    mediaIsAdult: false,

  });

  useEffect(() => {
    onChange(formData);
  }, [formData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="flex items-center space-x-4">
        <select
          className="outline-none focus:outline-none bg-transparent flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 "
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="default">Select Type</option>
          <option value="movie">Movie</option>
          <option value="tvshow">Tv-show</option>
        </select>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            name="mediaRef"
            className="outline-none block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Movies, Tv-Shows..."
            value={formData.mediaRef}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 py-2.5 px-4 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-1 outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
