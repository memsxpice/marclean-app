import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import './LoginPV.css';

const LoginPV = () => {
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
                <div className="submit"><Link to="/puntoVenta">Iniciar Sesion</Link></div>
            </div>
        </div>
    )
}


export default LoginPV