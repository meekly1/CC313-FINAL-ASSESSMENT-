import React from 'react';

const SearchFilter = ({ searchQuery, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
