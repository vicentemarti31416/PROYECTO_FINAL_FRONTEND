import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Fetch.css";
import { BiLockOpenAlt } from "react-icons/bi";
import { SearchContext } from "../../App";

export const Fetch = () => {
  const [offers, setOffers] = useState([]);
  const { searchText, setSearchText } = useContext(SearchContext);

  const getOffers = () => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        console.log(res.data)
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
        offers
          .filter((dataPosition) =>
          dataPosition.position && dataPosition.position.toLowerCase().includes(searchText)
          )
          .map((offer, index) => (
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
