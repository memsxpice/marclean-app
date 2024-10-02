import React from 'react';
import './PuntoVenta.css';

const PuntoVenta = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='textTitle'>Login Punto de Venta</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='Usuario'/>
                </div>
                <div className="input">
                    <input type="password" placeholder='Contraseña'/>
                </div>
            </div>
            <div className="forgot-password">¿Olvidaste tu contraseña? <span>Clik aqui</span></div>
            <div className="submit-container">
                <div className="submit">Iniciar Sesion</div>
            </div>
        </div>
    )
}


export default PuntoVenta