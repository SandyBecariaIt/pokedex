import { useState } from 'react';
import * as api from './../utils/index' 

export const usePokemons = () => {
    const [allInfo, setAllInfo] = useState(undefined)
    const [loader, setLoader] = useState(false)
    const [detail, setDetail] = useState({})
    const [ability, setAbility] = useState([])
    
    const getAllPokemons = async () => {
      setLoader(true)
      const { results } = await api.getPokemons()
      getAllInfo(results)
    }

    const getAllInfo = async (results) => {
      if (results) {
        getArray(results)
      } else {
        setAllInfo(undefined)
      }
      setLoader(false)
    }

    const getArray = (array) => {
      setAllInfo(array.map(async (item, index) => {
        const result = await getByName(item.name)
        return { ...result }
      }))
      
    }
  
    const getByName = async (name) => {
      const result = await api.getPokemonByName(name)
      return result
    }

    const searchByName = (e) => {
      const value = e.target.value
  
      if (value === '') {
        getAllPokemons()
      } else {
        setTimeout(async () => {
          const pokemon = await getByName(value.toLocaleLowerCase())
          setAllInfo(pokemon ? [pokemon] : pokemon)
        }, 5000)
      }
    }

    const getAbility = async (id) => {
      const ability = await api.getPokemonAbility(id)
      setAbility(ability)
    }

    return {
      loader,
      allInfo,
      getByName,
      searchByName,
      getAllPokemons,
      detail,
      setDetail,
      getAbility,
      ability
    }
}
