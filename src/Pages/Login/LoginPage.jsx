import React from "react";
import "./Login.css";
import group7 from "../../assets/group7.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (dataF) => {
    console.log(dataF);
  };

  return (
    <div className="loginContainer">
      <div className="loginLogo">
        <img src={group7} alt="group7"></img>
      </div>

      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginBloque">
          <label className="loginLabel" htmlFor="email">
            Email ID
          </label>
          <input
            className="button-blue button100"
            type="email"
            id="email"
            placeholder="Email ID"
            {...register("email")}
          />
        </div>

        <div className="loginBloque">
          <label className="loginLabel" htmlFor="password">
            Contraseña
          </label>
          <input
            className="button-blue button100"
            type="password"
            id="password"
            placeholder="Contraseña"
            {...register("contraseña")}
          />
        </div>

        <div className="loginBloque">
          <button className="button-white button100">
            <Link to={"/home"}>Comenzar</Link>
          </button>
        </div>
      </form>

      <div className="loginError">
        <p className="loginErrorP">No puedes iniciar sesión?</p>
        <Link to={"/RestablecerContrasenaEmail"} className="loginErrorLink">
          Restablecer la contraseña
        </Link>
      </div>

      <div className="loginLine"></div>

      <div className="loginNew">
        <Link to={"/register"} className="loginWhite">
          <h3>Crear nueva cuenta</h3>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
