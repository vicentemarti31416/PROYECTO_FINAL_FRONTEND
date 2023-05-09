import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import flechaRetroceder from "../../assets/flechaRetroceder.png";

const RestablecerContrasenaEmail = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (dataF) => {
    console.log(dataF);
  };

  return (
    <div className="loginContainer loginContainerRest">
      <div className="loginRetroceder">
        <Link to={"/login"}>
          <img src={flechaRetroceder} className="imgVector" alt=""></img>
        </Link>
        <p>Restablecer contraseña</p>
      </div>
      <div className="loginInputsRest">
        <form
          className="loginForm loginFormRest"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="loginBloque">
            <label className="loginLabelRest" htmlFor="email">
              Email ID
            </label>
            <input
              className="button-blue"
              type="email"
              id="email"
              placeholder="Email ID"
            />
          </div>

          <div className="loginBloque">
            <label className="loginLabelRest" htmlFor="emailConfirm">
              Confirmar
            </label>
            <input
              className="button-blue"
              type="email"
              id="emailConfirm"
              placeholder="Confirmar email"
              {...register("email")}
            />
          </div>
          <div className="loginBloque">
            <button className="button-white">
              <Link to={"/RestablecerContrasenaContrasena"}>Enviar enlace</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestablecerContrasenaEmail;
