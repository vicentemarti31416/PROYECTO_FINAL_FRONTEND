import React from 'react'
import './Perfil.css';
import imagen from "../../assets/avatar1.jpg";

function CreatePage() {
  return (
    <div className='Container-perfil'>
    <h3 className='texto-perfil'>Perfil</h3>
      <div className="img-div-perfil">
        <img className="img-perfil" src={imagen} alt="congratulations" />
        <h3 className='name-perfil'>Silvia Fernández</h3>
      </div>
      <div className="button-perfil">
        <button className="botonera-perfil">Tu cuenta</button>
        <button className="botonera-perfil">Administradores</button>
        <button className="botonera-perfil">Suscripción y facturación</button>
       
        <button className="botonera-perfil">Ayuda</button>
      
      </div>
    </div>

  

  )
}

export default CreatePage