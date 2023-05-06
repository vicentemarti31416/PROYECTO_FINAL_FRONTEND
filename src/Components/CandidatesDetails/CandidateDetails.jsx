import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CandidateDetails = () => {
  const [candidate, setCandidate] = useState(null);
  const { id } = useParams();

  const getCandidate = () => {
    axios
      .get(`http://localhost:8000/candidates/${id}`)
      .then((res) => {
        setCandidate(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCandidate();
  },);

  return (
    <div className="page">
      <div className="container">
        <div className="candidates">
          {candidate && (
            <div className="persons">
              <img className="image" src={candidate.image} alt="candidate" />
              <h3>
                {candidate.name} {candidate.surname}
              </h3>
              <h3>{candidate.profession}</h3>
              <div>
                {Object.entries(candidate.contact)
                  .filter(([key]) => key !== "_id")
                  .map(([key, value]) => (
                    <p key={key}>
                      {key}: <a href={value}>{value}</a>
                    </p>
                  ))}
              </div>
              <div className="datos">
                <p>Datos personales</p>
                <p>{candidate.age}</p>
                <p>{candidate.location}</p>
                <p>{candidate.email}</p>
                <p>{candidate.phone}</p>
              </div>
              <div className="keywords">
                <p>Palabras clave del perfil</p>
                <div>
                  {candidate.keywords.map((keyword, item) => (
                    <p key={item}>{keyword}</p>
                  ))}
                </div>
              </div>
              <div className="education">
                <p>Educacion: {candidate.education}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
