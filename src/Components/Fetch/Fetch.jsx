import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Fetch.css";
import { BiLockOpenAlt } from "react-icons/bi";

export const Fetch = () => {
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
    <div className="offerdisplay">
      {offers && offers.length > 0 ? (
        offers.map((offer, index) => (
          <div className="job-offer-detail" key={index}>
            <Link to={`/offers/${offer._id}`}>
              <div>
                <BiLockOpenAlt />
              </div>
              <h3>{offer.position}</h3>
              <h4>{offer.company}</h4>
              <div>
                <strong>Requisitos:</strong> {offer.requirements}
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No hay ofertas disponibles.</p>
      )}
    </div>
  );
};
