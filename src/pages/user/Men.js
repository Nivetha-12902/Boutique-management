import React from 'react';
import '../user/Men.css';
import Card from '../../components/Card';

function Men({details,addToCart}) {
  const menDress=details;

  return (
    <div className="card-container">
      {menDress?.map((item, index,isUser) => (
        <Card item={item} index={index} isUser={isUser} addToCart={addToCart}/>

      ))}
    </div>
  );
}

export default Men;
