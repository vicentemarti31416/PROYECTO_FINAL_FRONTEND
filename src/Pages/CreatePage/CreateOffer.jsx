import React, { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import flechaRetrocederNegra from "../../assets/flechaRetrocederNegra.png";
import vectorX from "../../assets/vectorX.png";

export const CreateOffer = () => {
 
  const [currentSheet, setCurrentSheet] = useState(0);
  const [jobTitle, setJobTitle] = useState("");


  const [offers, setOffers] = useState([]);
  const { register, handleSubmit, getValues  } = useForm();
  
  const handleNextClick = () => {
    const sheet = currentSheet + 1;
    setCurrentSheet(sheet);
  };

  const handleCreateOffer = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getValues())
    };
  
    fetch('http://localhost:8000/offers', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log("pusheado", data);
        // Mostrar mensaje de éxito al usuario
      })
      .catch(error => {
        console.error(error);
        // Mostrar mensaje de error al usuario
      });
  };
  
  const onSubmit = (data) => {
    handleCreateOffer();
    console.log("hola holita", data);
  };
  
  const handleButton = (value) => {
    setJobTitle(value);
  };

  const getOffers = () => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        setOffers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getOffers();
  }, []);


        
  
  return (
    <>
      <div className="">
        <h3>Descripción de la oferta</h3>
        <form onSubmit={handleSubmit(onSubmit)}>

        {currentSheet == 0 &&
        <div className="container-black">
      
        <h4 className="">Duplicar oferta</h4>

        <div>
  {Array.isArray(offers) && offers.length > 0 ? (
    offers.map((offer, index) => (
      <div key={index} className="create-offers">
        <button className="button-blue" onClick={() => handleButton(offer.position)}>
          {offer.position}
        </button>
      </div>
    ))
  ) : (
    <p>No hay ofertas disponibles</p>
  )}
</div>
        <div className="">
          <h4 className="">Titulo de la nueva oferta</h4>
          <input
            className=""
            type="text"
            id="title"
            placeholder="Escribe el título"
            {...register("position")}
          />
          <p>¿Cómo crear un título efectivo?</p>
        </div>
        <button onClick={handleNextClick} className="button-white">
          Comenzar
        </button>
      
    </div>

          }


          {currentSheet == 1 &&
    <div className="">
      
        <div className="">
          <select {...register("city")} defaultValue="">
            <option value="" disabled>
              Ciudad
            </option>
            {[
              "A Coruña",
              "Alicante",
              "Almería",
              "Badalona",
              "Barcelona",
              "Bilbao",
              "Cartagena",
              "Córdoba",
              "Elche",
              "Getafe",
              "Gijón",
              "Granada",
              "Jerez de la Frontera",
              "Málaga",
              "Madrid",
              "Murcia",
              "Mostoles",
              "Oviedo",
              "Palma",
              "Pamplona",
              "Sevilla",
              "Sabadell",
              "Valencia",
              "Valladolid",
              "Vigo",
              "Vitoria",
              "Zaragoza",
            ]
              .sort()
              .map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        <div className="">
          <select {...register("location")} defaultValue="">
            <option value="" disabled>
              Ubicacion
            </option>
            {[
              "Alemania",
              "Argentina",
              "Armenia",
              "Australia",
              "Brasil",
              "Canadá",
              "China",
              "Colombia",
              "España",
              "Estados Unidos",
              "Francia",
              "Italia",
              "Japón",
              "México",
              "Portugal",
              "Reino Unido",
              "Rusia",
              "Sudáfrica",
              "Suecia",
              "Suiza",
              "Ucrania",
              "Venezuela",
            ]
              .sort()
              .map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>

        <div className="">
          <select {...register("availability")} defaultValue="">
            <option value="" disabled>
              Disponibilidad
            </option>
            <option value="full-time">Tiempo completo</option>
            <option value="part-time">Medio tiempo</option>
            <option value="week-end">Fines de semana</option>
            <option value="remote-time">Trabajo remoto</option>
            <option value="proyect-time">Trabajo por proyectos</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <h4 className=""> Condiciones </h4>
          <select {...register("salary")} defaultValue="">
            <option value="" disabled>
              Salario anual
            </option>
            <option value="16000-20000">16000-20000€</option>
            <option value="20000-30000">20000-30000€</option>
            <option value="30000-40000">30000-40000€</option>
          </select>
        </div>

        <div className="">
          <select {...register("scheduleType")} defaultValue="">
            <option value="" disabled>
              Tipo de jornada
            </option>
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
            <option value="evening">Noche</option>
          </select>
        </div>

        <div className="">
          <select {...register("contractType")} defaultValue="">
            <option value="" disabled>
              Tipo de contrato
            </option>
            <option value="temporary">Temporal</option>
            <option value="permanent">Permanente</option>
            <option value="freelance">Freelance</option>
            <option value="parcial-time">Contrato por tiempo parcial</option>
            <option value="formation">Contrato de formación</option>
            <option value="practice">Contrato en prácticas</option>
          </select>
        </div>
        <button onClick={handleNextClick} className="button-black">
          Continuar
        </button>
        {/* <button type="submit"> siguiente</button> */}
      
    </div>
    }

    {currentSheet == 2 &&

    <div className="">
      
        <h4 className="">Requisitos de candidato</h4>
        <div className="">
          <p className="">Descripción de requisitos</p>
          <input
            {...register("description")}
            type="text"
            placeholder="Descripción..."
          />
        </div>
      

        <h4 className="">Codificaciones internas</h4>
        <div className="">
          {/* <label htmlFor="keywords">Añadir palabras clave</label> */}
          <select {...register("keywords")} defaultValue="">
            <option value="" disabled>
              Palabras clave
            </option>
            <option value="Developer">Developer</option>
            <option value="Javscript">Javscript</option>
            <option value="Liderazgo">Liderazgo</option>
            <option value="Oratoria">Oratoria</option>
            <option value="Creatividad">Creatividad</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Diseño">Diseño</option>
          </select>
        </div>

          <button type="submit" className="button-black">
            Crear oferta
          </button>
      
    </div>
      }
        </form>

      </div>

  </>
  );
};
