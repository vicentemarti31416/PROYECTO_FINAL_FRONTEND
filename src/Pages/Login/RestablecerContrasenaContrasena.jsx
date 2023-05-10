// import React, { useState } from "react";
// import "./Login.css";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import flechaRetroceder from "../../assets/flechaRetroceder.png";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// const RestablecerContrasenaContrasena = () => {
//   const { register, handleSubmit } = useForm();
//   const [showPassword1, setShowPassword1] = useState(false); 
//   const [showPassword2, setShowPassword2] = useState(false); 
 

//   const togglePasswordVisibility1 = () => {
//     setShowPassword1(!showPassword1)
//   };

//   const togglePasswordVisibility2 = () => {
//     setShowPassword2(!showPassword2)
//   }


//   const onSubmit = (formData) => {
//     formData.userId = userId;
//     formData.resetString = resetString;
//     console.log("formData" + formData)
//     API.post('user/resetPassword', formData)
//       .then((res) => {console.log('Password updated successfully:', res.data, 'Full AxiosResponse:', res);
//       navigate('/home');
//       })
//       .catch((error) => console.log(error));
//   }

//   return (
//     <div className="loginContainer loginContainerRest">
//       <div className="loginRetroceder">
//         <Link to={"/RestablecerContrasenaEmail"}>
//           <img src={flechaRetroceder} className="imgVector" alt=""></img>
//         </Link>
//         <p>
//           Restablecer contraseña
//         </p>
//       </div>
//       <form className="loginForm loginFormRest" onSubmit={handleSubmit(onSubmit)}>
//         <div className="loginBloque">
//           <label className="loginLabelRest" htmlFor="password">
//             Nueva contraseña
//           </label>
//           <input
//             className="button-blue "
//             type={showPassword1 ? "text" : "password"}
//             id="password"
//             placeholder="Nueva contraseña"
//           />
//             {showPassword1 ? (
//                 <AiOutlineEyeInvisible
//                   className="eye-icon"
//                   onClick={togglePasswordVisibility1}
//                 />
//               ) : (
//                 <AiOutlineEye
//                   className="eye-icon"
//                   onClick={togglePasswordVisibility1}
//                 />
//               )}
//         </div>
//         <div className="loginBloque">
//           <label className="loginLabelRest" htmlFor="passwordConfirm">
//             Confirmar
//           </label>
//           <input
//             className="button-blue "
//             type={showPassword2 ? "text" : "password"}
//             id="passwordConfirm"
//             placeholder="Confirmar contraseña"
//             {...register("contraseña")}
//           />
//           {showPassword2 ? (
//                 <AiOutlineEyeInvisible
//                   className="eye-icon"
//                   onClick={togglePasswordVisibility2}
//                 />
//               ) : (
//                 <AiOutlineEye
//                   className="eye-icon"
//                   onClick={togglePasswordVisibility2}
//                 />
//               )}
//         </div>
//         <div className="loginBloque">
//           <button className="button-white">
//             <Link to="/login">Guardar</Link>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RestablecerContrasenaContrasena;
import React, { useContext, useEffect } from 'react'
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import flechaRetroceder from "../../assets/flechaRetroceder.png";
import { API } from '../../shared/services/api';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../shared/components/AuthProvider/AuthProvider';
import { JwtContext } from '../../shared/contexts/JwtContext';

const RestablecerContrasenaContrasena = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const { userId, resetString } = useParams();
  const navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log("isAuthenticated = " + isAuthenticated);
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (formData) => {
    formData.userId = userId;
    formData.resetString = resetString;
    console.log("formData" + formData)
    API
      .post('user/resetPassword', formData)
      .then((res) => {
        console.log('Password updated successfully:', res.data, 'Full AxiosResponse:', res);
        navigate('/home');
      })
      .catch((error) => console.log(error));
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
            {...register("password")}
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
            {...register("newPassword")}
          />
        </div>

        <div className="loginBloque">
          <button type="submit" className="button-white">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestablecerContrasenaContrasena;