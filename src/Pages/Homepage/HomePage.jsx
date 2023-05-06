import React from "react";
import "./HomePage.css";
import { BiChat } from "react-icons/bi";
import Nav from "../../Components/Nav/Nav";
import image from "../../assets/Meettalent.png";
import { Fetch } from "../../Components/Fetch/Fetch";
import profile from "../../assets/avatar1.jpg";
import { Link } from 'react-router-dom';

const HomePage = ({ offers }) => {
  return (
    <div className="homecontainer">
      <div className="homehead">
        <img src={image} className="hometitle" alt="" />
        <div className="homenav">
        <Link to={'/profile'} ><img
            className="homeimg"
            src={profile}
            alt=""
          /></Link>
          <input className="homesearch" placeholder="Buscar"></input>
          <Link to={'/messages'} ><BiChat className="chat"></BiChat></Link>
        </div>
      </div>
      <div className="offers">
        <h2>Ofertas abiertas({offers})</h2>
        <div className="homeoffers">
          <Fetch></Fetch>
        </div>
        <Nav></Nav>
      </div>
    </div>
  );
};

export default HomePage;
