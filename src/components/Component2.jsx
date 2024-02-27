import React, {useState} from 'react';
import './Component2.css';

export const Component2 = () => {
    let [cantidad,Presionado] = useState(0)

    const sumaClick = () => {
        Presionado(cantidad + 1)
    }

    return (
    <div>
        <h2>Presionaste el boton: {cantidad} veces</h2>
        <button id='botoncito' onClick={sumaClick}><strong>Presioname</strong></button>
    </div>
  )
}
