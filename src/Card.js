import React from "react";
import './card.css';

function Card({id, name, email}) {
  return (
    <div className='bg-light-purple border dib pa3 ma2 grow'>
      <div className='pa3 ma2'>
        <img 
          src={`https://robohash.org/${id}?set=set4`}
          alt='Robot'
          height='200px'
        />
      </div>
      <div className='tc'>
        <h2>{name} </h2>
        <p>{email.toLowerCase()}</p>
      </div>
    </div>

  );
}

export default Card;
