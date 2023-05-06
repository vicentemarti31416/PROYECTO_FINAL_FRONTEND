import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";;



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
    <div>
      <div className="page">
        <div className="container">
          <div className="candidates">
            {candidates.map((cand, index) => (
              <div className="persons" key={index}>
                <Link to={`/candidates/${cand._id}`}>
                <img className="image" src={cand.image} alt="candidate" />
                <h3>
                  {cand.name} {cand.surname}
                </h3>
                <h3>{cand.profession}</h3>
                <div className="datos">
                  <p>Datos personales</p>
                  <p>{cand.age}</p>
                  <p>{cand.location}</p>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Nav></Nav>
    </div>

  );
};
