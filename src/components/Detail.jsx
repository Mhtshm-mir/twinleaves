import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {

  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

  const detailStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    padding: '20px',
    textAlign: 'center',
  backgroundColor:"#D3D3D3"

  };
  const cardStyle = {
    backgroundColor: '#fff', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
    fontWeight:"bold"
  };
  return (
    <div style={detailStyle}>
      {selectedItem ? (
        <div style={cardStyle}>
          <img src={selectedItem.img} alt={selectedItem.name} style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>Name: {selectedItem.name}</p>
          <p>Category: {selectedItem.category}</p>
          <p>Country Of Origin: {selectedItem.countryOrigin}</p>
          <p>Gross Weight: {selectedItem.grossWeight}</p>
          <p>Price: {selectedItem.mrp}</p>
          <p>Net Content: {selectedItem.netContent}</p>
          <p>New Weight: {selectedItem.netWeight}</p>
          <Link to="/" >Go back</Link>
        </div>
      ) : (
        <p>No item selected</p>
      )}
    </div>
  );
};

export default Detail;