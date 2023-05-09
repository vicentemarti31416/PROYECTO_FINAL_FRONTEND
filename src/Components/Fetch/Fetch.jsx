import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Fetch.css";
import { SearchContext } from "../../App";
import { BiLockAlt, BiMap } from "react-icons/bi";
import { BiLockOpenAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const Fetch = () => {
  const [offers, setOffers] = useState([]);
  const { searchText } = useContext(SearchContext);
  const [abierto, setAbierto] = useState({});
  // const [cantidadOfertas] = useContext(offers.length);



  useEffect(() => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        console.log(res.data);
        setOffers(res.data);
        const initialAbiertoState = res.data.reduce((acc, offer) => {
          acc[offer._id] =
            localStorage.getItem(`abierto_${offer._id}`) === "true";
          return acc;
        }, {});
        setAbierto(initialAbiertoState);
        Object.keys(initialAbiertoState).forEach((offerId) => {
          localStorage.setItem(
            `abierto_${offerId}`,
            initialAbiertoState[offerId]
          );
        });
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

  return (
    <div className="offerdisplay">
      {offers && offers.length > 0 ? (
        offers
          .filter(
            (dataPosition) =>
              dataPosition.position &&
              dataPosition.position.toLowerCase().includes(searchText)
          )
          .map((offer, index) => {   const percent = Math.round(Math.random() * 100); return (
            <div className="lockposition" key={offer._id}>
              <div
                className="locklogo"
                onClick={() => toggleAbierto(offer._id)}
              >
                {abierto[offer._id] ? <BiLockOpenAlt /> : <BiLockAlt />}
              </div>
              <Link className="job-offer-detail" to={`/offers/${offer._id}`}>
                <div className="fechacreacion">17/04</div>
                <h3>{offer.position}</h3>
                <div className="city">
                  <div>
                    <BiMap /> {offer.location}
                  </div>
                  <div>
                    1 <AiOutlineUser className="logouser" />
                  </div>
                  <div>
                    <AiOutlineEye /><span> </span>
                     02/02/2023
                  </div>
                </div>
                <div className="line"></div>
                <div className="process">
                  <div className="processperc">
                    <div>Proceso</div>
                    <div className="percent">{percent}%</div>
                  </div>
                  <div className="progress-bar">
                    <div
                      class="progress"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="footeroffer">
                  <div>
                    <div className="number">
                      {Math.floor(Math.random() * 50)}
                    </div>
                    <div>Inscritos</div>
                  </div>
                  <div className="linevert"></div>
                  <div>
                    <div className="number">
                      {Math.floor(Math.random() * 50)}
                    </div>
                    <div>Procesos</div>
                  </div>
                  <div className="linevert"></div>
                  <div>
                    <div className="number">
                      {Math.floor(Math.random() * 50)}
                    </div>
                    <div>Finalistas</div>
                  </div>
                </div>
                <div></div>
              </Link>
            </div>
          )})
      ) : (
        <p>No hay ofertas disponibles.</p>
      )}
    </div>
  );
};
