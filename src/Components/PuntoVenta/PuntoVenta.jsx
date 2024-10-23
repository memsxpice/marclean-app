import React from 'react';
import './PuntoVenta.css';
import jabonPolvo from '../Assets/jabonPolvo.png';
import jabonLiquido from '../Assets/jabonLiquido.png';

const PuntoVenta = () => {
    return (
        <div className='container'>
            <h1> Articulos de limpieza  </h1>
            <img src={jabonPolvo} alt="jabonPolvo"/>
            <img src={jabonLiquido} alt="jabonLiquido"/>
            
        </div>
    )
}


export default PuntoVenta
