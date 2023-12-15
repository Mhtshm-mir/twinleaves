import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sort from './Sort';
import Filter from './Filter';
import Search from './Search';
import { Link } from 'react-router-dom';

const DataManipulation = ({ originalData, columns }) => {
  const [filteredData, setFilteredData] = useState(originalData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const sortData = (data, order) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      return order === 'asc' ? a.mrp - b.mrp : b.mrp - a.mrp;
    });
    return sortedData;
  };

  useEffect(() => {
    let filteredResult = originalData;

    if (selectedCategory) {
      if (selectedCategory === 'All Categories') {
        filteredResult = originalData;
      } else {
        filteredResult = filteredResult.filter((item) => item.category === selectedCategory);
      }
    }

    if (searchTerm) {
      filteredResult = filteredResult.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const sortedResult = sortData(filteredResult, sortOrder);
    setFilteredData(sortedResult);
  }, [originalData, sortOrder, selectedCategory, searchTerm]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    if (term.length > 0) {
      setSearchTerm(term);
    } else {
      setFilteredData(originalData);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex',gap:"5px" ,boxShadow: "0 4px 8px rgba(0, 0.1, 0.1, 0.1)"}}>
        <Sort handleSort={handleSort} />
        <Filter handleFilter={handleFilter} />
        <Search handleSearch={handleSearch} />
      </div>

      <DataGrid
        rows={filteredData}
        columns={[
          ...columns,
          {
            field: 'details',
            headerName: 'Details',
            width: 100,
            renderCell: (params) => (
              <Link
                to="/detail"
                onClick={() => {
                  localStorage.setItem('selectedItem', JSON.stringify(params.row));
                }}
              >
                Details
              </Link>
            ),
          },
        ]}
        style={{
          marginTop: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default DataManipulation;