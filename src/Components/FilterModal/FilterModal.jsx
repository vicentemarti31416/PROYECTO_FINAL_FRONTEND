import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import './FilterModal.css';

export const FilterModal = () => {
    const { handleSubmit } = useForm();
    const [filters, setFilters] = useState({
        ciudad: "",
        ubicacion: "",
        disponibilidad: "",
        salario: "",
        tipoJornada: "",
    });

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (

        <div className='modal'>
        <div className='modal-header'>
            <h4>FILTROS</h4>
            {/* <div onClick={() => closeModal()}> */}
                {/* <button className='close-button'><img className='' src={close} alt='close' /></button> */}
                <button className='close-button'><img className=''alt='close' /></button>
            {/* </div> */}
        </div>
        {/* <div className=''> */}
   
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
        {/* </div> */}
        </div>
    )
}


