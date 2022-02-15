import { useState } from 'react';

export const usePokemons = () => {
    const [pokemons, setPokemos] = useState([])

    const getPokemons = () => {
      console.log('Hola')
      setPokemos('')
    }

    return {
        pokemons,
        getPokemons
    }
}
