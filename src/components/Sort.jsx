import React from 'react';

const Sort = ({ handleSort }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="sort" style={{ marginRight: '10px' }}>
        Sort by Price:
      </label>
      <select
        id="sort"
        onChange={(e) => handleSort(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sort;