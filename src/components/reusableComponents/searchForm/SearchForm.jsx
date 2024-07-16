import React, { useState, useEffect } from "react";

const SearchForm = ({ onChange, setResultPage }) => {
  const [formData, setFormData] = useState({
    category:
      sessionStorage.getItem("queryCatagory")?.replace(/[\/\\"]/g, "") || "default",
    mediaRef: sessionStorage.getItem("query")?.replace(/[\/\\"]/g, "") || "",
    mediaIsAdult: sessionStorage.getItem("mediaIsAdult") === "true",
  });

  useEffect(() => {
    onChange(formData);
    sessionStorage.setItem("queryCatagory", formData.category || "default");
  }, [formData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResultPage(1)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIsAdult = (e) => {
    const isChecked = e.target.checked;
    sessionStorage.setItem("mediaIsAdult", isChecked.toString());
    setFormData((prevData) => ({
      ...prevData,
      mediaIsAdult: isChecked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyUp={() => setResultPage(1)}
      className="max-w-xl mx-auto"
    >
      <div className="flex items-center space-x-3">
        <select
          className="outline-none justify-center focus:outline-none bg-transparent flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 "
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option className="text-left" value="default">
            All
          </option>
          <option className="text-left" value="movie">
            Movies
          </option>
          <option className="text-left" value="tvshow">
            Tv-show
          </option>
          <option className="text-left" value="person">
            Actor
          </option>
        </select>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            name="mediaRef"
            className="outline-none block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Movies, Tv-Shows, Categories..."
            value={formData.mediaRef}
            onChange={handleChange}
            required
          />
        </div>

        <label className="inline-flex items-center cursor-pointer flex-col">
          <input
            type="checkbox"
            checked={formData.mediaIsAdult}
            className="sr-only peer"
            onChange={handleIsAdult}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 text-nowrap">
            Include Adult
          </span>
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
