
import React from "react";

export const CandidatesPage = ({ candidates }) => {
  return (
    <div className="page">
      <div className="container">
        <div className="candidates">
          {candidates.map((cand, index) => (
            <div className="persons" key={index}>
              <img className="image" src={cand.image} alt="candidate" />
              <h3>
                {cand.name}
                {cand.surname}
              </h3>
              <h3>{cand.profession}</h3>

              <div>
                {Object.entries(cand.contact)
                  .filter(([key]) => key !== "_id")
                  .map(([key, value]) => (
                    <p key={key}>
                      {key}: <a href={value}>{value}</a>
                    </p>
                  ))}
              </div>
              <div className="datos">
                <p>Datos personales</p>
                <p>{cand.age}</p>
                <p>{cand.location}</p>
                <p>{cand.email}</p>
                <p>{cand.phone}</p>
              </div>
              <div className="keywords">
                <p>Palabras clave del perfil</p>
                <div>
                  {cand.keywords.map((keyword, item) => (
                    <p key={item}>{keyword}</p>
                  ))}
                </div>
              </div>
              <div className="education">
                <p>{cand.education}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

