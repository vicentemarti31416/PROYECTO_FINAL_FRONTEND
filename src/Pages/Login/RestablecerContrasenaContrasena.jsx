import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import flechaRetroceder from "../../assets/flechaRetroceder.png";

const RestablecerContrasenaContrasena = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (dataF) => {
    console.log(dataF);
  };

  return (
    <div className="loginContainer loginContainerRest">
      <div className="loginRetroceder">
        <Link to={"/RestablecerContrasenaEmail"}>
          <img src={flechaRetroceder} className="imgVector" alt=""></img>
        </Link>
        <p>
          Restablecer contraseña
        </p>
      </div>

      <form className="loginForm loginFormRest" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginBloque">
          <label className="loginLabelRest" htmlFor="password">
            Nueva contraseña
          </label>
          <input
            className="button-blue"
            type="password"
            id="password"
            placeholder="Nueva contraseña"
          />
        </div>

        <div className="loginBloque">
          <label className="loginLabelRest" htmlFor="passwordConfirm">
            Confirmar
          </label>
          <input
            className="button-blue"
            type="password"
            id="passwordConfirm"
            placeholder="Confirmar contraseña"
            {...register("contraseña")}
          />
        </div>

        <div className="loginBloque">
          <button className="button-white">
            <Link to="/login">Guardar</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestablecerContrasenaContrasena;
