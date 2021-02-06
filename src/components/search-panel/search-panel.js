import React from 'react';

const SearchPanel = ({ onSearch }) => {
  const searchText = 'Type here to search...';

  return (
    <input
      type="text"
      className="form-control"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      placeholder={searchText}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
export default SearchPanel;
