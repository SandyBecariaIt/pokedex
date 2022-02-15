import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './../styles/global-style.css'
import { usePokemons } from './../hooks/usePokemos'

const Details = () => {
  const {
    ability,
    detail,
    setDetail,
    getByName,
    getAbility
  } = usePokemons()
  const params = useParams();

  useEffect(() => {
    getById()
  }, [])

  const getById = async () => {
    const result = await getByName(params.idPokemon)
    getAbility(params.idPokemon)
    
    if (result) {
      setDetail(result)
    }
  }

  return (
    <div className='container'>
      <div className='content-return'>
        <Link
          className='return'
          to="/"
        >
          &#60; Regresar
        </Link>
      </div>

      <div className='style-detail'>
        <div className='img-style'>
          <img className='img' src={detail.sprites?.front_shiny || ''} />
        </div>

        <div className='info-style'>
          <div className='backgroung-blue'>
            <div className='div-information'>
              <div className='information-pokedex'>
                <p className='title-info'>Nombre</p>
                <span className='text-info'>
                  {detail.name}
                </span>
              </div>

              <div className='information-pokedex'>
                <p className='title-info'>Generación</p>
                <span className='text-info'>
                  { ability?.generation ? ability?.generation.name : '' }
                </span>
              </div>
            </div>

            <div className='div-information'>
              <div className='information-pokedex'>
                <p className='title-info'>Grupo</p>
                <span className='text-info'>
                  { ability.effect_changes && ability.effect_changes.version_group ? ability?.effect_changes[0].version_group?.name : '' }
                </span>
              </div>

              <div className='information-pokedex'>
                <p className='title-info'>Altura</p>
                <span className='text-info'>0.7m</span>
              </div>
            </div>

            <div className='div-information'>
              <div className='information-pokedex'>
                <p className='title-info'>Habilidad</p>
                <span className='text-info'>Espesura</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className='text-info'
        >
          {ability?.effect_entries ? ability?.effect_entries[0]?.effect : ''}
        </div>
      </div>
    </div>
  )
}

export default Details
