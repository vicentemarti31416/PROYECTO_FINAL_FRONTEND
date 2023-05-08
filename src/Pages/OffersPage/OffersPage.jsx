import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import "./OffersPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { Fetch } from "../../Components/Fetch/Fetch";
import Searcher from "../../Components/Searcher/Searcher";
import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";


export const OffersPage = () => {
  return (
    <div className="page">
      <h3 className="backheader">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Ofertas
        <div></div>
      </h3>
      <div className="container-black">
        <div className="Buscador">
          <BiSearch className="lupa" />
          <Searcher></Searcher>
          <TbAdjustmentsHorizontal />
        </div>
        <div className="botones-principales">
          <button className="botonera-message-1">Abiertas</button>
          <button className="botonera-message-1">Cerradas</button>
        </div>
        <div className="homeoffers">
          <Fetch></Fetch>
        </div>
      </div>
      <Nav />
    </div>
  );
};
