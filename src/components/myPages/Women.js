import React from 'react';
import './Women.css';
import Card from '../Card';

function Women({details}) {


  const womenDress=details;

  return (
    <>
     <div className="card-container">
      {womenDress?.map((item, index) => (
        <Card item={item} index={index}/>
      ))}
    </div>
    </>
    
  );
}

export default Women;
