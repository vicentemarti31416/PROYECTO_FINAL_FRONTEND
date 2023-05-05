import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';


const RestablecerContraseñaEmail = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (dataF) => {
    console.log(dataF);
    }  

  return (
    <div className='restablecerContainer'>

        <div className='restablecerInputs'>
            <form className='restablecerForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='restablecerEmail'>
                    <label className='restablecerLabel' htmlFor='email'>Email ID</label>
                    <input className='restablecerInput' type="text" id='email' placeholder="Email ID" {...register("email")} />
                </div>

                <div className='restablecerContraseña'>
                    <label className='restablecerLabel' htmlFor='contraseña'>Contraseña</label>
                    <input className='restablecerInput' type="text" id='contraseña' placeholder="Contraseña" {...register("contraseña")} />
                </div>

                <div>
                    <button className='restablecerComenzar'>Comenzar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RestablecerContraseñaEmail