import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import "./OffersPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BiLockOpenAlt } from "react-icons/bi";
import { SearchContext } from '../../App';
import Searcher from "../../Components/Searcher/Searcher";
import { AbiertoContext } from "../../Components/Fetch/AbiertoContext";


export const OffersPage = () => {

  const [abierto, setAbierto] = useState({});

  return (
    <div className="page user home">
      <h3 className="backheader">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Ofertas
        <div></div>
      </h3>
      <div className="container-black">
        <div className="Buscador">

        <Searcher></Searcher>
          {/* <BiSearch className="lupa" />
          <input
            className="dentro-buscador"
            type="text"
            id="buscar"
            placeholder="Buscar"
          /> */}
          <TbAdjustmentsHorizontal />
        </div>
        <div className="botones-principales">
          <button className="botonera-message-1">Abiertas</button>
          <button className="botonera-message-1">Cerradas</button>
        </div>
        <div className="homeoffers">
          <AbiertoContext.Provider value={{ abierto, setAbierto }}>
            <Fetch></Fetch>
          </AbiertoContext.Provider>
        </div>
      </div>
      <Nav />
    </div>
  );
};
