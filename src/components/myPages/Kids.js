import React from 'react';
import './Kids.css';
import Card from '../Card';

function Kids({details}) {
  const kidsDress=details;

  return (
    <>
    <div className="card-container">
      {kidsDress?.map((item, index) => (
        <Card item={item} index={index}/>
      ))}
    </div>
    </>
  );
}

export default Kids;
