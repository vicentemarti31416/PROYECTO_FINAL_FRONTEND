
import React from "react";
import "./createpage.css";
import Nav from "../../Components/Nav/Nav";
import BlueBase from "../../Components/BlueBase/BlueBase";
import image from '../../assets/Meettalent.png'
import { Link } from "react-router-dom";



function CreatePage() {
  return (
    <div className='create'>
    <BlueBase></BlueBase>
<img className="hometitle" src={image} alt="" />
    <Link to={"/createoffer"}>
  <button className="buttoncrear">Crear oferta</button>
  </Link>
    <img alt="imagen"/>
  <button>Crear prueba</button>
      <Nav></Nav>
    </div>
  )
}

export default CreatePage;
