import React from 'react';
import './../../styles/global-style.css';

const CardComponent = ({ name, url, powers }) => {
  return (
    <div className='card'>
      <img
        className='img-card'
        src={url || ''}
      />
      <p className='title-card'>{ name || '' }</p>

      <div className='footer'>
        {
          powers.map((power, index) => {
            return (
              <div
                key={index}
                className='item-power'
              >
                { power.name }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default CardComponent
