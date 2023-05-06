import React from 'react';
import './Message.css';

export const MessagePage = () => {
  return (
    <div className='fondo-message'>
    <h2 className='mesjajes'>Mensajes</h2>
      <div className='Container-message'>
        <input className="Buscador" type="text" placeholder="Buscador" />
        <div className='botones-principales'>
          <button className="botonera-message-1">() Recibidos</button>
          <button className="botonera-message-1">Enviados</button>
          <button className="botonera-message-1">Destacados</button>
        </div>
        <div className="button-message">
          <button className="botonera-message-2">NILTON</button>
          <button className="botonera-message-2">Harrut</button>
          <button className="botonera-message-2">JOSE</button>
          <button className="botonera-message-2">Liza</button>
        </div> 
      </div>
    </div>
  );
};
