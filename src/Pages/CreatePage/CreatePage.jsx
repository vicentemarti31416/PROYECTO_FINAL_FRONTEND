import React from "react";
import "./createpage.css";
import Nav from "../../Components/Nav/Nav";
import BlueBase from "../../Components/BlueBase/BlueBase";
import image from '../../assets/Meettalent.png'

function CreatePage() {
  return (
    <div className="create">
      <img className="hometitle" src={image} alt="" />
      <BlueBase></BlueBase>
      <div className="buttoncrear">Crear oferta</div>
      <div>Crear prueba</div>
      <Nav></Nav>
    </div>
  );
}

export default CreatePage;
