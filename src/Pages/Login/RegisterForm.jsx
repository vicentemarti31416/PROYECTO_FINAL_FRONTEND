import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { API } from '../../shared/services/api';


const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData)
    //if (formData.password === formData.repeatPassword) {
      API
      .post('user/register', formData)
      .then((res) => {
        console.log('User registered successfully with response:', res.data, 'Full AxiosResponse:', res);
        navigate('/login');
      })
      .catch((error) => console.log(error));
    /*} else {
      console.log("Las contraseñas no coinciden")
    }*/
  };

  return (
    <div className="register_container">
      <h3>Crear Cuenta</h3>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="register">
          <div className="register-div">
            <label className="register-label" htmlFor="name">
              Nombre de la empresa
            </label>
            <input
              className="register-input"
              type="text"
              id="name"
              placeholder="Nombre de la empresa"
              {...register("name", { required: true })}
            />
            {errors.nombre && (
              <span className="error-message">Campo requerido</span>
            )}
          </div> 
          <div className="register-div">
            <label className="register-label" htmlFor="nif">
              NIF
            </label>
            <input
              className="register-input"
              type="text"
              id="nif"
              placeholder="G-0000000"
              {...register("nif", { required: true })}
            />
            {errors.nif && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div">
            <label className="register-label" htmlFor="email">
              Email ID
            </label>
            <input
              className="register-input"
              type="text"
              id="email"
              placeholder="Email ID"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error-message">Campo requerido</span>
            )}
          </div> 
          <div className="register-div">
            <label className="register-label" htmlFor="password">
              Contraseña
            </label>
            <div>
            <input 
          
              className="register-input"
              type="password"
              id="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
            </div>
            {errors.contraseña && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div">
            <label className="register-label" htmlFor="confirmar-contraseña">
              Confirmar Contraseña
            </label>
            <input
              className="register-input"
              type="password"
              id="confirmar-contraseña"
              placeholder="Confirmar Contraseña"
              {...register("repeatPassword", { required: true })}
            />
            {errors["confirmar-contraseña"] && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div1">
            <label className="register-label" htmlFor="checkbox">
              Al crear una cuenta, 
              <Link to={"/"} className="textBlue">
                acepta los términos y condiciones 
              </Link> 
              
              relacionados con <Link to={"/"} className="textBlue">meeTTalent</Link> 
            </label>
            <input className="checkbox"
              type="checkbox"
              {...register("terminos", { required: true })}
            />
            {errors.terminos && (
              <span className="error-message">
                Debe aceptar los términos y condiciones
              </span>
            )}
          </div>
        </div>
        <button type="submit" className="button-black">Continuar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
