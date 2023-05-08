import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import "./OffersPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BiLockOpenAlt } from "react-icons/bi";
import { SearchContext } from '../../App';
import Searcher from "../../Components/Searcher/Searcher";

export const OffersPage = () => {
  const {searchText, setSearchText} = useContext(SearchContext);
  const [offers, setOffers] = useState([]);

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
    <div className="page">
      <h3 className="backheader ">
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
        <div className="offerslist">
          <div className="botones-principales">
            <button className="botonera-message-1">Abiertas</button>
            <button className="botonera-message-1">Cerradas</button>
          </div>
          {offers && offers.length > 0 ? (
            offers.filter((dataSearch)=> dataSearch.position.toLowerCase().includes(searchText)).map((offer, index) => (
              <div className="job-offer" key={index}>
                <Link to={`/offers/${offer._id}`}>
                  <BiLockOpenAlt className="candado-abierto" />
                  <h3>{offer.position}</h3>
                  <h4>{offer.company}</h4>
                  <p>
                    <strong>Requisitos:</strong> {offer.requirements}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <p>No hay ofertas disponibles.</p>
          )}
        </div>
      </div>
      <Nav />
    </div>
  );
};
