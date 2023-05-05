import React, { useState, useEffect } from "react";
import axios from "axios"
import { CandidatesDetails } from "./Components/CandidatesDetails/CandidateDetails";
import { OffersDetails } from "./Components/OffersDetails/OffersDetails";
import { CandidatesPage } from "./Pages/CandidatesPage/CandidatesPage";
import { OffersPage } from "./Pages/OffersPage/OffersPage";
import LoginPage from "./Pages/Login/LoginPage";
import {Congrats} from "./Components/Congrats/Congrats";
import HomePage from "./Pages/Homepage/HomePage";
import Welcome from "./Components/Welcome/Welcome";

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
      {/* <Welcome></Welcome> */}
    <Congrats></Congrats>
    {/* <LoginPage></LoginPage> */}
    {/* <CandidatesDetails candidates={candidates}></CandidatesDetails> */}
    {/* <OffersDetails offers={offers}></OffersDetails> */}
    {/* <HomePage></HomePage> */}
    {/* <CandidatesPage candidates={candidates}></CandidatesPage> */}
    {/* <OffersPage offers={offers}></OffersPage> */}
    </div>
  );
}

export default App;
