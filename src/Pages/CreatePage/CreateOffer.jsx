import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const CreateOffer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [currentSheet, setCurrentSheet] = useState(0);
  const handleNextClick = () => {
    const sheet = currentSheet === sheets.length - 1 ? 0 : currentSheet + 1;
    setCurrentSheet(sheet);
  };
  const [jobTitle, setJobTitle] = useState("");
  const handleButton = (value) => {
    setJobTitle(value);
  };

  const sheets = [

    //primera página
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="">Duplicar oferta</h4>
        <div>
          <button className="button-white" onClick={() => handleButton("administrativo")}>Administrativo</button>
          <button className="button-white" onClick={() => handleButton("projectmanager")}>Project Manager</button>
          <button className="button-white" onClick={() => handleButton("programador")}>Programador</button>
          <button className="button-white" onClick={() => handleButton("mkdigital")}>Especialista en marketing digital</button>
          <p>Selected job: {jobTitle}</p>
        </div>
        <div className="">
          <h4 className="">Titulo de la nueva oferta</h4>
          <input className='' type="text" id='title' placeholder="Escribe el título" {...register("jobTitle")} />
          <p>¿Cómo crear un título efectivo?</p>
        </div>
        <button onClick={handleNextClick} className="button-black">Comenzar</button>
      </form>
    </div>,

    //segunda página
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
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

        <div className="">
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

        <div className="">
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
          <h4 className="">   Condiciones </h4>
          <label htmlFor="salary">Salario anual</label>
          <select {...register("salary")}>
            <option value="16000-20000">16000-20000€</option>
            <option value="20000-30000">20000-30000€</option>
            <option value="30000-40000">30000-40000€</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="work-schedule">Tipo de jornada</label>
          <select {...register("work-schedule")}>
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
            <option value="evening">Noche</option>
          </select>
        </div>

        <div className="">
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
        <button onClick={handleNextClick} className="button-black">Continuar</button>
      </form>
    </div>,


    //tercera página
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="">Requisitos de candidato</h4>
        <div className="">
          <p className="">Descripción de requisitos</p>
          <input {...register("requiresDescription")} type="text" placeholder="Descripción..." />
        </div>
        <div className="">
          <label htmlFor="questions">Añadir preguntas</label>
          <select {...register("questions")}>
            <option value="question1">Pregunta 1</option>
            <option value="question2">Pregunta 2</option>
            <option value="question3">Pregunta 3</option>
            <option value="question4">Pregunta 4</option>
            <option value="question5">Pregunta 5</option>
          </select>
        </div>
        <h4 className="">Codificaciones internas</h4>
        <div className="">
          <label htmlFor="keywords">Añadir palabras clave</label>
          <select {...register("keywords")}>
            <option value="keyword1">Palabra clave 1</option>
            <option value="keyword2">Palabra clave 2</option>
            <option value="keyword3">Palabra clave 3</option>
            <option value="keyword4">Palabra clave 4</option>
            <option value="keyword5">Palabra clave 5</option>
          </select>
        </div>
        <button onClick={handleNextClick} className="button-black">Continuar</button>
      </form>
    </div>
  ]

  return (
    <div className="">
      <h3>Descripción de la oferta</h3>
      {sheets[currentSheet]}
    </div>
  );
};
