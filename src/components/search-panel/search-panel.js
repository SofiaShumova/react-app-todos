import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search...';

  return (
    <input
      type="text"
      className="form-control"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      placeholder={searchText}
    />
  );
};
export default SearchPanel;
