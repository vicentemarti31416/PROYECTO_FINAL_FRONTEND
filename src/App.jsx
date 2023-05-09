import React, { useState } from "react";
import Welcome from "./Components/Welcome/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CandidatesPage } from "./Pages/CandidatesPage/CandidatesPage";
import { OffersPage } from './Pages/OffersPage/OffersPage';
import { OffersDetails } from "./Components/OffersDetails/OffersDetails";
import NotificationsPage from "./Pages/NotificationsPage/NotificationsPage";
import LoginPage from "./Pages/Login/LoginPage";
import { MessagePage } from "./Pages/MessagesPage/MessagePage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import HomePage from "./Pages/HomePage/HomePage";
import { Congrats } from "./Components/Congrats/Congrats";
import Perfil from "./Pages/Profile/Perfil";
import RestablecerContrasenaEmail from "./Pages/Login/RestablecerContrasenaEmail";
import RestablecerContrasenaContrasena from "./Pages/Login/RestablecerContrasenaContrasena";
import RegisterForm from "./Pages/Login/RegisterForm";
import { CreateOffer } from "./Pages/CreatePage/CreateOffer";
import { CandidateDetails } from "./Components/CandidatesDetails/CandidateDetails";
import Congrats2 from "./Components/Congrats/Congrats2";

export const SearchContext = React.createContext();


function App() {

  const [searchText, setSearchText] = useState("");
  const [oferta, setOferta] = useState({});

  return (
    <div>
      <SearchContext.Provider value={{ searchText, setSearchText, oferta, setOferta }}>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/candidates" element={<CandidatesPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/createoffer" element={<CreateOffer />} />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="/congrats2" element={<Congrats2 />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/restablecerContrasenaEmail" element={<RestablecerContrasenaEmail />} />
            <Route path="/restablecerContrasenaContrasena" element={<RestablecerContrasenaContrasena />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/messages" element={<MessagePage />} />
            {/* <Route path="/offersdetails" element={<OffersDetails />} /> */}
            <Route path="/Profile" element={<Perfil />} />
            <Route path="/offers/:id" element={<OffersDetails />} />
            <Route path="/candidates/:id" element={<CandidateDetails />} />
          </Routes>
        </Router>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
