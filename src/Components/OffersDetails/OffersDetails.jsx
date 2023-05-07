import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./OffersDetails.css";

export const OffersDetails = () => {
  const [offer, setOffer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/offers/${id}`)
      .then((res) => {
        setOffer(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="page">
      <h3 className="backheader">
        <Link to={"/offers"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Detalle de la oferta
        <div></div>
      </h3>
      <div className="container-black">
        <div className="offers">
          {offer ? (
            <div className="job-offer">
              <h3>{offer.position}</h3>
              <h4>{offer.company}</h4>
              <p>
                <strong>Descripción:</strong>
              </p>
              <p> {offer.description}</p>
              <p>
                <strong>Requisitos:</strong>
              </p>
              <p> {offer.requirements}</p>
              <p>
                <strong>Salario:</strong>
              </p>
              <p> {offer.salary}</p>
              <p>
                <strong>Ubicación:</strong>
              </p>
              <p> {offer.location}</p>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
      <Nav />
    </div>
  );
};
