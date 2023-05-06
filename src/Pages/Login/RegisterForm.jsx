import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (dataF) => {
    console.log(dataF);
  };

  return (
    <div className="register_container">
      <h3>Crear Cuenta</h3>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register">
          
            <label className="register-label" htmlFor="nombre">
              Nombre de la empresa
            </label>
            <input
              className="register-input"
              type="text"
              id="nombre"
              placeholder="Nombre de la empresa"
              {...register("nombre")}
            />
          
         
            <label className="register-label" htmlFor="nif">
              NIF
            </label>
            <input
              className="register-input"
              type="text"
              id="nif"
              placeholder="G-0000000"
              {...register("nif")}
            />
          
          
            <label className="register-label" htmlFor="email">
              Email ID
            </label>
            <input
              className="register-input"
              type="text"
              id="email"
              placeholder="Email ID"
              {...register("email")}
            />
         

          
            <label className="register-label" htmlFor="contraseña">
              Contraseña
            </label>
            <input
              className="register-input"
              type="text"
              id="contraseña"
              placeholder="Contraseña"
              {...register("contraseña")}
            />
          
          
            <label className="register-label" htmlFor="contraseña">
              Contraseña
            </label>
            <input
              className="register-input"
              type="text"
              id="contraseña"
              placeholder="Confirmar Contraseña"
              {...register("contraseña")}
            />
          
          
            <label htmlFor="checkbox">
              Al crear una cuenta,acepta los terminos y condiciones relacionados
              con meeTTalent
            </label>
            <input type="checkbox" />
          

          <div>
          </div>
      </div>
        </form>
      <button className="button-black">continuar</button>
    </div>
  );
};

export default RegisterForm;
