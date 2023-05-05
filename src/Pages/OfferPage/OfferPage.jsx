import React from "react";
import axios from "axios";
import "./OfferPage.css";

function OfferPage() {
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
    <div>
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
      </div>
    </div>
  );
}

export default OfferPage;
