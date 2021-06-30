import React from 'react';

const Weather = props => (
    <div>
        { props.city &&
        <div className='weather_block'>
            <p>Месторасположение: {props.city}, {props.country}</p>
            <p>Температура воздуха: {props.temp}°С</p>
            <p>Влажность: {props.humidity}%</p>
            <p>Cостояние погоды: {props.description}</p>
        </div>
        }
        <p className="weather_error">{ props.error }</p>
    </div>
);

export default Weather;