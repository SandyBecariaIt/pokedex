import React from 'react';
import './../../styles/global-style.css';

const SearchComponent = ({ hdlChange }) => {
  return (
    <div className='search'>
      <input
        className='input-search'
        placeholder='Busca un pokemon'
        onChange={hdlChange}
      />
      <img
        className='img'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/1046px-Search_Noun_project_15028.svg.png'
      />
    </div>
  );
}

export default SearchComponent