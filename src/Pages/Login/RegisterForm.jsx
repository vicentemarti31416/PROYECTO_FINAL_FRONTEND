
import React, { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const RegisterForm = () => {
  const [showPassword1, setShowPassword1] = useState(false); 
  const [showPassword2, setShowPassword2] = useState(false); 


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataF) => {
    console.log(dataF);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);

import React, { useContext, useEffect } from 'react'
import "./Register.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai";
import { API } from '../../shared/services/api';
import { AuthContext } from '../../shared/components/AuthProvider/AuthProvider';
import { JwtContext } from '../../shared/contexts/JwtContext';

const RegisterForm = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setJwt } = useContext(JwtContext);

  useEffect(() => {
      console.log("isAuthenticated = " + isAuthenticated);
      if (isAuthenticated) {
          navigate("/home");
      }
  }, [isAuthenticated, navigate]);

  const onSubmit = (formData) => {
    console.log(formData);
    //if (formData.password === formData.repeatPassword) {
    API.post("user/register", formData)

      .then((res) => {
        console.log(
          "User registered successfully with response:",
          res.data,
          "Full AxiosResponse:",
          res
        );
        navigate("/login");
      })
      .catch((error) => console.log(error));
    /*} else {
      console.log("Las contraseñas no coinciden")
    }*/

  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  
  return (
    <div className="register_container">

      <h3>Crear Cuenta</h3>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="register">
          <div className="register-div">
            <label className="register-label" htmlFor="nombre">
              Nombre de la empresa
            </label>
            <input
              className="register-input"
              type="text"
              id="nombre"
              placeholder="Nombre de la empresa"
              {...register("nombre", { required: true })}
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
            <label className="register-label" htmlFor="contraseña">
              Contraseña
            </label>

            <div className="password-input">
              <input
                className="register-input"
                type={showPassword1 ? "text" : "password"}
                id="contraseña"
                placeholder="Contraseña"
                {...register("contraseña", { required: true })}
              />
              {showPassword1 ? (
                <AiOutlineEyeInvisible
                  className="eye-icon"
                  onClick={togglePasswordVisibility1}
                />
              ) : (
                <AiOutlineEye
                  className="eye-icon"
                  onClick={togglePasswordVisibility1}
                />
              )}
/*
            <div>
              <input
                className="register-input"
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
              />
*/
            </div>
            {errors.contraseña && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div">
            <label className="register-label" htmlFor="confirmar-contraseña">
              Confirmar Contraseña
            </label>
            <div className="password-input">
              <input
                className="register-input"
                type={showPassword2 ? "text" : "password"}
                id="confirmar-contraseña"
                placeholder="Confirmar Contraseña"
                {...register("confirmar-contraseña", { required: true })}
              />
               {showPassword2 ? (
                <AiOutlineEyeInvisible
                  className="eye-icon"
                  onClick={togglePasswordVisibility2}
                />
              ) : (
                <AiOutlineEye
                  className="eye-icon"
                  onClick={togglePasswordVisibility2}
                />
              )}
            </div>
            {errors["confirmar-contraseña"] && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div1">

            <label className="register-label1" htmlFor="checkbox">
              Al crear una cuenta,
              <Link to={"/"} className="textBlue" >
/*
            <label className="register-label" htmlFor="checkbox">
              Al crear una cuenta,{" "}
              <Link to={"/"} className="textBlue">
*/
                acepta los términos y condiciones{" "}
              </Link>
              relacionados con{" "}
              <Link to={"/"} className="textBlue">
                meeTTalent
              </Link>
            </label>
            <input
              className="checkbox"
              type="checkbox"
              {...register("terminos", { required: true })}
            />
            {errors.terminos && (
              <span className="error-message">
                Debe aceptar los términos y condiciones
              </span>
            )}
          </div>
          <button type="submit" className="button-black">
            Continuar
          </button>
        </div>
      </form>
      <button className="button-black">
        <Link className="loginWhite" to={"/congrats"}>
          Continuar
        </Link>
      </button>
    </div>
  );
};

export default RegisterForm;

