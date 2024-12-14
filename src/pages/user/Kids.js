import React from 'react';
import '../user/Kids.css';
import Card from '../../components/Card';


function Kids({details,addToCart}) {
  const kidsDress=details;

  return (
    <div className="card-container">
      {kidsDress?.map((item, index,isUser) => (
        <Card item={item} index={index} isUser={isUser} addToCart={addToCart}/>

      ))}
    </div>
  );
}

export default Kids;
