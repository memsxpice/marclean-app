import React from 'react';
import './LoginNomina.css';

const LoginNomina = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text"/>
                </div>
                <div className="input">
                    <input type="email"/>
                </div>
                <div className="input">
                    <input type="password"/>
                </div>
            </div>
        </div>
    )
}


export default LoginNomina