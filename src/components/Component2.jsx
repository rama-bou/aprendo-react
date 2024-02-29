import React, { useState } from "react";
import "./Component2.css";

export const Component2 = () => {
  const [cantidad, setCantidad] = useState(0);

  const sumaClick = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div>
      <h2>Presionaste el botón: {cantidad} veces</h2>
      {cantidad < 1000000 ? (
        <button id="botoncito" onClick={sumaClick}>
          <strong>Presioname</strong>
        </button>
      ) : (
        <p>Llegaste al 1 millón de clics! POR FAVOR, ANDA A TOMAR AIRE</p>
      )}
    </div>
  );
};