import React from "react";
import './card.css';

function SearchBox({ searchChange}) {
  return (
    <input
      type='search'
      placeholder='Search robots'
      className='pa3 bg-light-purple border border-white tc ma2'
      onChange={ searchChange }></input>
  );
}

export default SearchBox;
