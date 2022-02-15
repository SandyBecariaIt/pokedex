import React from 'react';
import CardComponent from './ui/Card';
import SearchComponent from './ui/Search';
import { Link } from "react-router-dom";
// import { usePokemons } from './../hooks/usePokemos'

const pokemon = [{
  name: 'Pokemon 1',
  photo: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png',
  poder: [{name: 'Poder 1'}, {name: 'Poder 2'}]
},{
    name: 'Pokemon 2',
    photo: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png',
    poder: [{name: 'Poder 1'}, {name: 'Poder 2'}]
  }]

// const { pokemons, getPokemons } = usePokemons()

const Pokedex = () => {
  return (
    <div className="container">
      <div className='search-container'>
        <SearchComponent />
      </div>

      <div className='card-container'>
        {
          pokemon.map((item, index) => {
            return (
              <Link to="/details/1">
                <CardComponent
                  key={index}
                  name={item.name}
                  url={item.photo}
                  powers={item.poder}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default Pokedex;
