import React, { useState } from "react";
import { debounce } from "lodash";

function NavBar({ setSearchedCity }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchedCity(value);
  };

  const debouncedSearch = debounce(handleSearch, 100);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debouncedSearch.cancel(); // Cancel any pending debounced search requests
    handleSearch(searchValue); // Perform the search immediately
  };

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-xxl">Weather Report</h1>
        </div>
        <div>
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="search"
              className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none"
              placeholder="City Name..."
              value={searchValue}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded-r-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export { NavBar };


