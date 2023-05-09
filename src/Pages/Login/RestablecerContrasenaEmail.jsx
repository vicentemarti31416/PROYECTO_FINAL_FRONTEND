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
        <img src={flechaRetroceder} className="imgFlecha" alt=""></img>
        <Link to={"/login"} className="loginWhite">
          Restablecer contraseña
        </Link>
      </div>

        <form className="loginForm loginFormRest" onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default RestablecerContrasenaEmail;
