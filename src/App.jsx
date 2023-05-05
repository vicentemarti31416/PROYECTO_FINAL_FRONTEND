import React, { useState, useEffect } from "react";
import axios from "axios"
import { CandidatesDetails } from "./Components/CandidatesDetails/CandidateDetails";
import { OffersDetails } from "./Components/OffersDetails/OffersDetails";



function App() {
  const [candidates, setCandidates] = useState([]);
  const [offers, setOffers] = useState([]);

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


  

  useEffect (() =>{
    getCandidates()
    getOffers()
  }, []);

  return (
    <div>
    <CandidatesDetails candidates={candidates}></CandidatesDetails>
    <OffersDetails offers={offers}></OffersDetails>
    </div>
  );
}

export default App;
