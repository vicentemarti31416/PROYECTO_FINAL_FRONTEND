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
        <img src={flechaRetroceder} className="imgFlecha" alt=""></img>
        <Link to={"/RestablecerContrasenaEmail"} className="loginWhite">
          Restablecer contraseña
        </Link>
      </div>

      <div className="loginInputsRest">
        <form className="loginFormRest" onSubmit={handleSubmit(onSubmit)}>
          <div className="loginImput pt50">
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

          <div className="loginImput">
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

          <div>
            <button className="button-white">
              <Link to="/login">Guardar</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestablecerContrasenaContrasena;
