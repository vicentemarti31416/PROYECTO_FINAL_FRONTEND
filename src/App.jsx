import React from "react";
import Welcome from "./Components/Welcome/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CandidatesPage } from "./Pages/CandidatesPage/CandidatesPage";
import {OffersPage} from './Pages/OffersPage/OffersPage';
import { OffersDetails } from "./Components/OffersDetails/OffersDetails";
import { CandidatesDetails } from "./Components/CandidatesDetails/CandidateDetails";
import NotificationsPage from "./Pages/NotificationsPage/NotificationsPage";
import LoginPage from "./Pages/Login/LoginPage";
import { MessagePage } from "./Pages/MessagesPage/MessagePage";
import HomePage from "./Pages/HomePage/HomePage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import { Congrats } from "./Components/Congrats/Congrats";
import Perfil from "./Pages/Profile/Perfil";


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/candidates" element={<CandidatesPage/>} />
        <Route path="/offers" element={<OffersPage/>} />
        <Route path="/notifications" element={<NotificationsPage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/congrats" element={<Congrats/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/message" element={<MessagePage/>} />
        <Route path="/offersdetails" element={<OffersDetails/>} />
        <Route path="/candidatedetails" element={<CandidatesDetails/>} />
        <Route path="/Profile" element={<Perfil/>} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
