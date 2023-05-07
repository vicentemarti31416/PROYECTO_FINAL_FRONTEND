import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

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
          <h3 className="texto-candi">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Ofertas
      </h3>
      <div className="container-black">
        <div className="offers">
          {offer ? (
            <div className="job-offer">
              <h3>{offer.position}</h3>
              <h4>{offer.company}</h4>
              <p>
                <strong>Descripción:</strong> {offer.description}
              </p>
              <p>
                <strong>Requisitos:</strong> {offer.requirements}
              </p>
              <p>
                <strong>Salario:</strong> {offer.salary}
              </p>
              <p>
                <strong>Ubicación:</strong> {offer.location}
              </p>
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
