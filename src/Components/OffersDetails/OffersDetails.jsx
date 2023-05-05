import React from "react";

export const OffersDetails = ({ offers }) => {
  return (
    <div className="page">
      <div className="container">
        <div className="offers">
          {offers && offers.length > 0 ? (
            offers.map((offer, index) => (
              <div className="job-offer" key={index}>
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
            ))
          ) : (
            <p>No hay ofertas disponibles.</p>
          )}
        </div>
      </div>
      <Nav></Nav>
    </div>
  );
};
