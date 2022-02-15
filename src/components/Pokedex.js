import React, { useEffect, useState } from 'react';
import CardComponent from './ui/Card';
import SearchComponent from './ui/Search';
import { Link } from "react-router-dom";
import { usePokemons } from './../hooks/usePokemos'

const Pokedex = () => {
  const {
    allInfo,
    getAllPokemons,
    searchByName
  } = usePokemons()
  
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="container">
      <div className='search-container'>
        <div className='title-search'>
          <img className='img' src='https://image.flaticon.com/icons/png/128/1033/1033032.png?ga=GA1.2.2004736385.1643673600' />
          <div className='title'>Pokesearch</div>
        </div>
        <SearchComponent
          hdlChange={e => searchByName(e)}
        />
      </div>
      {
        !allInfo ? <div className='not-fount'>No se encontraron resultados</div> 
        : <div className='card-container'>
            {
              !allInfo ? <div>Loader....</div> :
              allInfo.map((item, index) => {
                return (
                  <Link
                    to={`/details/${item.id || index}`}
                  >
                    <CardComponent
                      key={index}
                      name={item?.name || ''}
                      url={item?.sprites?.front_shiny || ''}
                      powers={item?.types || []}
                    />
                  </Link>
                )
              })
            }
        </div> 
      }
    </div>
  );
}

export default Pokedex;
