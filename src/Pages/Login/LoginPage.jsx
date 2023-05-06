import React from 'react';
import './Login.css';
import group7 from '../../assets/group7.png';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (dataF) => {
  console.log(dataF);
  }  

  return (
    <div className='loginContainer'>
        <div className='loginImages'>
            <img src={group7} alt='group7'></img>
        </div>

        <div className='loginInputs'>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='loginEmail'>
                    <label className='loginLabel' htmlFor='email'>Email ID</label>
                    <input className='button-blue' type="text" id='email' placeholder="Email ID" {...register("email")} />
                </div>

                <div className='loginContraseña'>
                    <label className='loginLabel' htmlFor='contraseña'>Contraseña</label>
                    <input className='button-blue' type="text" id='contraseña' placeholder="Contraseña" {...register("contraseña")} />
                </div>

                <div>
                    <button className='button-white'>Comenzar</button>
                </div>
            </form>
        </div>

        <div className='loginError'>
            <p className='loginErrorP'>No puedes iniciar sesión?</p>
            {/* <a className='loginErrorA' href='./'>Restablecer la contraseña</a> */}
            <Link to={'/RestablecerContrasenaEmail'} className='loginErrorA'>Restablecer la contraseña</Link>
        </div>

        <div className='loginLine'>

        </div>

        <div className='loginNew'>
            <h3><a className='loginWhite' href='./'>Crear nueva cuenta</a></h3>
        </div>
    </div>
  )
}

export default LoginPage