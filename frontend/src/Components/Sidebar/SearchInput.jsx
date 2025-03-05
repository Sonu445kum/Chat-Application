import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = ({ placeholder = "Search or start new chat", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
    console.log("Searching for:", searchTerm);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 p-2 bg-gray-100 rounded-full shadow-md"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        className="input input-bordered w-full rounded-full px-4 py-2 focus:outline-none bg-white text-gray-800"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white hover:bg-sky-600 transition duration-200"
      >
        <IoSearchSharp className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchInput;
