import React, { useState } from "react";
import "../styles/SearchBar.css";
import { ReactComponent as SearchIcon } from "../assets/search-ico.svg";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here, e.g., sending the query to an API
    console.log("Searching for:", searchQuery);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Looking for design |"
      />
      <button type="submit" className="search-button">
        <SearchIcon alt="Search icon" className="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
