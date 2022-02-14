import React, { Component } from 'react';
import CardComponent from './ui/Card';
import SearchComponent from './ui/Search';

class Pokedex extends Component {
  render () {
    return (
      <div className="container">
        <SearchComponent />

        <div className='card-container'>
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    );
  }
}

export default Pokedex;
