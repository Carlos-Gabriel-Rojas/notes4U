import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
  const handleInputChange = (e) => {
    handleSearchNote(e.target.value);
  };

  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;