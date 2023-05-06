import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import flechaRetroceder from '../../assets/flechaRetroceder.png';

const RestablecerContrasenaEmail = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (dataF) => {
  console.log(dataF);
  }  

  return (
    <div className='loginContainer'>
        <div className='loginRetroceder'>
          <img src={flechaRetroceder} className='imgFlecha'></img>
          <Link to={'/login'} className='loginWhite'>Restablecer contraseña</Link>
        </div>

        <div className='loginInputsRest'>
            <form className='loginFormRest' onSubmit={handleSubmit(onSubmit)}>
                <div className='loginEmail'>
                    <label className='loginLabel' htmlFor='email'>Email ID</label>
                    <input className='button-blue' type="text" id='email' placeholder="Email ID" />
                </div>

                <div className='loginContraseña'>
                    <label className='loginLabel' htmlFor='contraseña'>Confirmar</label>
                    <input className='button-blue' type="text" id='contraseña' placeholder="Confirmar email" {...register("email")} />
                </div>

                <div>
                    <button className='button-white'>
                      <Link to={'/RestablecerContrasenaContrasena'}>Enviar enlace</Link>
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default RestablecerContrasenaEmail