import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import "./CandidatesPage.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

export const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = () => {
    axios
      .get("http://localhost:8000/candidates")
      .then((res) => {
        setCandidates(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div className="candpage">
      <h3 className="texto-candi">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Candidatos
      </h3>
      <div className="container-black">
        <div className="Buscador">
          <BiSearch className="lupa" />
          <input
            className="dentro-buscador"
            type="text"
            id="buscar"
            placeholder="Buscar"
          />
          <TbAdjustmentsHorizontal />
        </div>
        <div className="filters">
          <p>
            <input type="checkbox" className="checkbox" /> Filtros
          </p>
          <p>Ubicacion</p>
          <p>Disponibilidad</p>
        </div>
        <div className="candlist">
          {candidates.map((cand, index) => (
            <div className="persons" key={index}>
              <Link className="candilink" to={`/candidates/${cand._id}`}>
                <img className="candimages" src={cand.image} alt="candidate" />
                <h4 className="personsh4">
                  {cand.name} {cand.surname}
                </h4>
                <h5 className="personsh5">{cand.profession}</h5>
                <div className="datos">
                  <p className="datos-p">{cand.age}</p>
                  <p className="datos-p">
                    <BiMap />
                    {cand.location}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="profilebubblediv">
          <div className="profilebubble">
            <AiOutlineUser className="profilelogo" />
          </div>
        </div>
        <Nav></Nav>
      </div>
    </div>
  );
};
