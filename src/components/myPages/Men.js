import React from 'react';
import './Men.css';
import Card from '../Card';
function Men({details}) {
  const menDress=details;

  return (
    <>
    <div className="card-container">
      {menDress?.map((item, index) => (

        <Card item={item} index={index}/>
      ))}
    </div>
    </>
  );
}

export default Men;
