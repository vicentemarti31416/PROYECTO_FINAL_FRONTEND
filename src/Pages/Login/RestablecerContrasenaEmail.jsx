import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import flechaRetroceder from "../../assets/flechaRetroceder.png";
import { API } from '../../shared/services/api';
import { useNavigate } from "react-router-dom";

const RestablecerContrasenaEmail = () => {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    API
    .post('user/register', formData)
    .then((res) => {
      console.log('User registered successfully with response:', res.data, 'Full AxiosResponse:', res);
      navigate('/login');
    })
    .catch((error) => console.log(error));
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
            <button type="submit" className="button-white">
              Enviar enlace
            </button>
          </div>
        </form>
    </div>
  );
};

export default RestablecerContrasenaEmail;
