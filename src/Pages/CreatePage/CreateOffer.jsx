import React from "react";
import { useForm } from "react-hook-form";

export const CreateOffer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="city">Ciudad</label>
        <select {...register("city")}>
          <option value="madrid">Madrid</option>
          <option value="barcelona">Barcelona</option>
          <option value="valencia">Valencia</option>
          <option value="sevilla">Sevilla</option>
          <option value="zaragoza">Zaragoza</option>
          <option value="málaga">Málaga</option>
          <option value="murcia">Murcia</option>
          <option value="palma">Palma</option>
          <option value="bilbao">Bilbao</option>
          <option value="alicante">Alicante</option>
          <option value="córdoba">Córdoba</option>
          <option value="valladolid">Valladolid</option>
          <option value="vigo">Vigo</option>
          <option value="gijón">Gijón</option>
          <option value="granada">Granada</option>
          <option value="la coruña">La Coruña</option>
          <option value="vitoria">Vitoria</option>
          <option value="elche">Elche</option>
          <option value="oviedo">Oviedo</option>
          <option value="badalona">Badalona</option>
          <option value="cartagena">Cartagena</option>
          <option value="mostoles">Móstoles</option>
          <option value="jerez de la frontera">Jerez de la Frontera</option>
          <option value="getafe">Getafe</option>
          <option value="almería">Almería</option>
          <option value="sabadell">Sabadell</option>
          <option value="pamplona">Pamplona</option>
        </select>
      </div>

      <div>
        <label htmlFor="country">País</label>
        <select {...register("country")}>
          <option value="españa">España</option>
          <option value="armenia">Armenia</option>
          <option value="francia">Francia</option>
          <option value="italia">Italia</option>
          <option value="alemania">Alemania</option>
          <option value="reino-unido">Reino Unido</option>
          <option value="portugal">Portugal</option>
          <option value="estados-unidos">Estados Unidos</option>
          <option value="mexico">México</option>
          <option value="argentina">Argentina</option>
          <option value="colombia">Colombia</option>
          <option value="australia">Australia</option>
          <option value="brasil">Brasil</option>
          <option value="canada">Canadá</option>
          <option value="china">China</option>
          <option value="japon">Japón</option>
          <option value="rusia">Rusia</option>
          <option value="sudafrica">Sudáfrica</option>
          <option value="suecia">Suecia</option>
        </select>
      </div>

      <div>
        <label htmlFor="availability">Disponibilidad</label>
        <select {...register("availability")}>
          <option value="full-time">Tiempo completo</option>
          <option value="part-time">Medio tiempo</option>
          <option value="week-end">Fines de semana</option>
          <option value="remote-time">Trabajo remoto</option>
          <option value="proyect-time">Trabajo por proyectos</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <div>
        <label htmlFor="salary">Salario anual</label>
        <select {...register("salary")}>
          <option value="16000-20000">16000-20000€</option>
          <option value="20000-30000">20000-30000€</option>
          <option value="30000-40000">30000-40000€</option>
        </select>
      </div>

      <div>
        <label htmlFor="work-schedule">Tipo de jornada</label>
        <select {...register("work-schedule")}>
          <option value="morning">Mañana</option>
          <option value="afternoon">Tarde</option>
          <option value="evening">Noche</option>
        </select>
      </div>

      <div>
        <label htmlFor="contract-type">Tipo de contrato</label>
        <select {...register("contract-type")}>
          <option value="temporary">Temporal</option>
          <option value="permanent">Permanente</option>
          <option value="freelance">Freelance</option>
          <option value="parcial-time">Contrato por tiempo parcial</option>
          <option value="formation">Contrato de formación</option>
          <option value="practice">Contrato en prácticas</option>
        </select>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};
