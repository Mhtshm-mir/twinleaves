import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="search" style={{ marginRight: '10px' }}>
        Search by Name:
      </label>
      <input
        type="text"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default Search;