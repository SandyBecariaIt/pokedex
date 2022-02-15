import React from 'react';
import { Link } from "react-router-dom";
import './../styles/global-style.css'

const Details = () => {
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
          <img className='img' src='https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png' />
        </div>

        <div className='info-style'>
          <p className='text-info'>Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.</p>
        
          <div className='backgroung-blue'>
            <div className='div-information'>
              <div className='information-pokedex'>
                <p className='title-info'>Altura</p>
                <span className='text-info'>0.7m</span>
              </div>

              <div className='information-pokedex'>
                <p className='title-info'>Categoria</p>
                <span className='text-info'>Semilla</span>
              </div>
            </div>

            <div className='div-information'>
              <div className='information-pokedex'>
                <p className='title-info'>Peso</p>
                <span className='text-info'>6.9 kg</span>
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

              <div className='information-pokedex'>
                <p className='title-info'>Sexo</p>
                <span className='text-info'>
                  kuhb
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Details
