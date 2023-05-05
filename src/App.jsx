import React, { useState, useEffect } from "react";
import axios from "axios"
import { CandidatesPage } from "./Pages/CandidatesPage/CandidatesPage";
import { OffersPage } from "./Pages/OffersPage/OffersPage";


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
    <CandidatesPage candidates={candidates}></CandidatesPage>
    <OffersPage offers={offers}></OffersPage>
    </div>
  );
}

export default App;
