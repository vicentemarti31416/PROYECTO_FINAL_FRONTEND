
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import ReactModal from 'react-modal';

Modal.setAppElement("#root");

export const FilterModal = ({ isOpen, closeModal }) => {
  const { handleSubmit } = useForm();
  const [filters, setFilters] = useState({
    ciudad: "",
    ubicacion: "",
    disponibilidad: "",
    salario: "",
    tipoJornada: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [open, setOpen] = useState(isOpen);

    return (
        <ReactModal className='position' isOpen={isOpen}>
        <div className='modal'>
        <div className='modal-header'>
            <h4>FILTROS</h4>
            <button onClick={closeModal} className=''>Cerrar</button>
        </div>
   
            <form className="" onSubmit={handleSubmit}>
                <div className="">
                    <select className="dentroForm"
                        name="ciudad"
                        defaultValue=""
                        onChange={handleInputChange}
                    >
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
                    <select className="dentroForm"
                        name="ubicacion"
                        defaultValue=""
                        onChange={handleInputChange}
                    >
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
                    <select className="dentroForm"
                        name="disponibilidad"
                        defaultValue=""
                        onChange={handleInputChange}
                    >
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
                    <select className="dentroForm" defaultValue="">
                        <option value="" disabled>
                            Salario anual
                        </option>
                        <option value="16000-20000">16000-20000€</option>
                        <option value="20000-30000">20000-30000€</option>
                        <option value="30000-40000">30000-40000€</option>
                    </select>
                </div>

                <div className="">
                    <select className="dentroForm" defaultValue="">
                        <option value="" disabled>
                            Tipo de jornada
                        </option>
                        <option value="morning">Mañana</option>
                        <option value="afternoon">Tarde</option>
                        <option value="evening">Noche</option>
                    </select>
                </div>

            </form>
        </div>
        </ReactModal>
    )
}








