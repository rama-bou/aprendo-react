import React, {useState} from 'react'

export const Component1 = () => {
    let [nombre,SetName] = useState("wacho")

    const cambiarNombre = () => {
        SetName(document.getElementById('textito').value)
    }

    return (
    <div>
        <h2>Tu nombre es: {nombre}</h2>
        <input type="text" name="text" placeholder='Escribe tu nombre' id='textito'/>
        <button onClick={cambiarNombre}>Enviar nombre</button>
    </div>
  )
}
