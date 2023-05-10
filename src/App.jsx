import React, { useState, useEffect, useContext } from "react";
import { JwtContext } from "./shared/contexts/JwtContext";
import RequireAuth from "./shared/components/RequireAuth/RequireAuth";
import jwt_decode from "jwt-decode";
import Welcome from "./Components/Welcome/Welcome";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CandidatesPage } from "./Pages/CandidatesPage/CandidatesPage";
import { OffersPage } from './Pages/OffersPage/OffersPage';
import { OffersDetails } from "./Components/OffersDetails/OffersDetails";
import NotificationsPage from "./Pages/NotificationsPage/NotificationsPage";
import LoginPage from "./Pages/Login/LoginPage";
import { MessagePage } from "./Pages/MessagesPage/MessagePage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import HomePage from "./Pages/Homepage/HomePage";
import { Congrats } from "./Components/Congrats/Congrats";
import Perfil from "./Pages/Profile/Perfil";
import RestablecerContrasenaEmail from "./Pages/Login/RestablecerContrasenaEmail";
import RestablecerContrasenaContrasena from "./Pages/Login/RestablecerContrasenaContrasena";
import RegisterForm from "./Pages/Login/RegisterForm";
import { CreateOffer } from "./Pages/CreatePage/CreateOffer";
import { CandidateDetails } from "./Components/CandidatesDetails/CandidateDetails";
import Congrats2 from "./Components/Congrats/Congrats2";
import { AuthProvider } from "./shared/components/AuthProvider/AuthProvider";
import { AuthContext } from "./shared/components/AuthProvider/AuthProvider";
export const SearchContext = React.createContext();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function AppContent() {
  const [filtros, setFiltros] = useState({
    location: null,
    city: null,
    availability: null,
    salary: null,
    scheduleType: null,
    keywords: []
});

  const [newOffer, setNewOffer] = useState(null);
  const [jwt, setJwt] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  // const [oferta, setOferta] = useState({});



  return (
    <AuthProvider>
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <SearchContext.Provider value={{ searchText, setSearchText, newOffer, setNewOffer, filtros, setFiltros }}>
          <div className="App">
            <div className="App-header">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<RequireAuth><HomePage /></RequireAuth>} />
                <Route path="/candidates" element={<RequireAuth><CandidatesPage /></RequireAuth>} />
                <Route path="/offers" element={<RequireAuth><OffersPage /></RequireAuth>} />
                <Route path="/notifications" element={<RequireAuth><NotificationsPage /></RequireAuth>} />
                <Route path="/create" element={<RequireAuth><CreatePage /></RequireAuth>} />
                <Route path="/createoffer" element={<RequireAuth><CreateOffer /></RequireAuth>} />
                <Route path="/congrats" element={<RequireAuth><Congrats /></RequireAuth>} />
                <Route path="/congrats2" element={<RequireAuth><Congrats2 /></RequireAuth>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/restablecerContrasenaEmail" element={<RestablecerContrasenaEmail />} />
                <Route path="/restablecerContrasenaContrasena/:userId/:resetString" element={<RestablecerContrasenaContrasena />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/messages" element={<RequireAuth><MessagePage /></RequireAuth>} />
                <Route path="/offersdetails" element={<RequireAuth><OffersDetails /></RequireAuth>} />
                <Route path="/Profile" element={<RequireAuth><Perfil /></RequireAuth>} />
                <Route path="/offers/:id" element={<RequireAuth><OffersDetails /></RequireAuth>} />
                <Route path="/candidates/:id" element={<RequireAuth><CandidateDetails /></RequireAuth>} />
              </Routes>
            </div>
          </div>
        </SearchContext.Provider>
      </JwtContext.Provider>
    </AuthProvider>

  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;