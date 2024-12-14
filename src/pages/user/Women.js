import React from 'react';
import '../user/Women.css';
import Card from '../../components/Card';

function Women({details, addToCart}) {
  const womenDress=details;

  return (
    <div className="card-container">
        {womenDress?.map((item,index,isUser) => (
         <Card item={item} index={index} isUser={isUser} addToCart={addToCart}/>

        ))}
    </div>
  );
}

export default Women;
