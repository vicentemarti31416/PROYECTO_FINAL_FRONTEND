import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import "./OffersPage.css";
import { IoIosArrowBack } from "react-icons/io";

export const OffersPage = () => {
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
    <div className="page1">
      <h3 className="texto-offer">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Ofertas
      </h3>
      <div className="container-black">
        <div className="offerslist">
          {offers && offers.length > 0 ? (
            offers.map((offer, index) => (
              <div className="job-offer" key={index}>
                <Link to={`/offers/${offer._id}`}>
                  <h3>{offer.position}</h3>
                </Link>
                <h4>{offer.company}</h4>
                <p>
                  <strong>Requisitos:</strong> {offer.requirements}
                </p>
              </div>
            ))
          ) : (
            <p>No hay ofertas disponibles.</p>
          )}
        </div>
      </div>
      <Nav></Nav>
    </div>
  );
};
