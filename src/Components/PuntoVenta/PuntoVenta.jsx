import React from 'react';
import './PuntoVenta.css';
import jabonPolvo from '../Assets/jabonPolvo.png';
import jabonLiquido from '../Assets/jabonLiquido.png';
import jabonBarra from '../Assets/jabonBarra.png';
import jabonAuto from '../Assets/jabonAuto.png';
import jabonManos from '../Assets/jabonManos.png';

const PuntoVenta = () => {
    return (
            <div className='container3'>
                <div className='columna-1'>
                    <h1> Punto de venta  </h1>
                    <table>
                        <tr>
                            <th>Producto</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td><img src={jabonPolvo} alt="jabonPolvo" width=" 100" height="100"/></td>
                            <td>Jabon en Polvo Roma</td>
                            <td>$75.00</td>
                            <td> <button type="button">Agregar</button> </td>
                        </tr>
                        <tr>
                            <td><img src={jabonLiquido} alt="jabonLiquido" width="100" height="100"/></td>
                            <td>Jabon Liquido Axion</td>
                            <td>$60.00</td>
                            <td> <button type="button">Agregar</button> </td>
                        </tr>
                        <tr>
                            <td><img src={jabonBarra} alt="jabonBarra" width="100" height="100"/></td>
                            <td>Jabon Zote</td>
                            <td>$33.00</td>
                            <td> <button type="button">Agregar</button> </td>
                        </tr>
                        <tr>
                            <td><img src={jabonAuto} alt="jabonAuto" width="100" height="100"/></td>
                            <td>Jabon para Auto</td>
                            <td>$140.00</td>
                            <td> <button type="button">Agregar</button> </td>
                        </tr>
                        <tr>
                            <td><img src={jabonManos} alt="jabonManos" width="100" height="100"/></td>
                            <td>Jabon de Manos</td>
                            <td>$27.00</td>
                            <td> <button type="button">Agregar</button> </td>
                        </tr>
                    </table>
                </div>
                <div className='columna-2'>
                    <h1>Calculadora</h1>
                    <input type="text" />
                    <table>
                        <tr>
                            <td><button type="button">AC</button></td>
                            <td><button type="button">±</button></td>
                            <td><button type="button">%</button></td>
                            <td><button type="button">÷</button></td>
                        </tr>
                    </table>
                </div>
            </div>
    )
}


export default PuntoVenta
