import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="category" style={{ marginRight: '10px' }}>
        Filter by Category:
      </label>
      <select
        id="category"
        onChange={(e) => handleFilter(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        <option value="">All Categories</option>
        <option value="Foodgrains, Oil & Masala">Foodgrains, Oil & Masala</option>
        <option value="Cleaning & Household">Cleaning & Household</option>
        <option value="BEVERAGES">Beverages</option>
        <option value="BABY CARE">Baby care</option>
      </select>
    </div>
  );
};

export default Filter;
