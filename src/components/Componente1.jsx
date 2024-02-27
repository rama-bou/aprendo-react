import React,{useState} from 'react'

export const Componente1 = () => { 
  const [nombre, setnombre] = useState("Ramiro")
  
  const cambiarnombre = () => {
    setnombre("RAMIRO")
  }

  let juegos = ["Fortnite","Minecraft","Cuphead"]
  
  return (
    <div>
      <h2>{nombre}'s Component</h2>
      <button onClick={cambiarnombre}>Cambiar nombre a mayus</button>
      <ul style={{listStyleType:'none'}}>
        {
         juegos.map((juego, indice) => {
           return(
            <li key={indice}>
              {juego}
            </li>
           )
         })
        }
      </ul>
    </div>
  )
}
