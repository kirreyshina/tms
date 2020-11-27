import React from 'react';

const Weather = props => {
  return (
    <div>
      {props.city &&
      <div>
      <p>Расположение: {props.city}, {props.country}</p>
      <p>Температура: {props.temp}</p>
      <p>Давление: {props.pressure}</p>
      </div>
      }
      <p>{props.error}</p>
    </div>
  )
};

export default Weather;
