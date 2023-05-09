import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Fetch.css";
import { SearchContext } from "../../App";
import { BiLockAlt } from "react-icons/bi";
import { BiLockOpenAlt } from "react-icons/bi";

export const Fetch = () => {
  const [offers, setOffers] = useState([]);
  const { searchText } = useContext(SearchContext);
  const [abierto, setAbierto] = useState({});
  // const [cantidadOfertas] = useContext(offers.length);

  useEffect(() => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        console.log(res.data)
        setOffers(res.data);
        const initialAbiertoState = res.data.reduce((acc, offer) => {
          acc[offer._id] =
            localStorage.getItem(`abierto_${offer._id}`) === "true";
          return acc;
        }, {});
        setAbierto(initialAbiertoState);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleAbierto = (offerId) => {
    setAbierto((prevState) => ({
      ...prevState,
      [offerId]: !prevState[offerId],
    }));
  };

  useEffect(() => {
    Object.keys(abierto).forEach((offerId) => {
      localStorage.setItem(`abierto_${offerId}`, abierto[offerId]);
    });
  }, [abierto]);

  return (
    <div className="offerdisplay">
      {offers && offers.length > 0 ? (
        offers
          .filter((dataPosition) =>
          dataPosition.position && dataPosition.position.toLowerCase().includes(searchText)
          )
          .map((offer, index) => (
            <div className="offerglobal" key={offer._id}>
              <div
                className="locklogo"
                onClick={() => toggleAbierto(offer._id)}
              >
                {abierto[offer._id] ? <BiLockOpenAlt /> : <BiLockAlt />}
              </div>
              <Link className="linkdiv" to={`/offers/${offer._id}`}>
                <div className="job-offer-detail">
                  <div></div>
                  <h3>{offer.position}</h3>
                  <h4>{offer.company}</h4>
                  <div>
                    <strong>Requisitos:</strong> {offer.requirements}
                  </div>
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
