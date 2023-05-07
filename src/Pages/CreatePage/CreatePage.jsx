import React from "react";
import "./createpage.css";
import Nav from "../../Components/Nav/Nav";
import image from "../../assets/Meettalent.png";
import { Link } from "react-router-dom";
import { AiOutlineFileText } from "react-icons/ai"

function CreatePage() {
  return (
    <div className="createpage">
      <img className="createtitle" src={image} alt="" />
      <div className="container-black">
        <div className="circle"><AiOutlineFileText className="logo"/></div>
        <Link to={"/createoffer"} className="createlink">
          <button className="buttoncrear">Crear oferta</button>
        </Link>
        <button>Crear prueba</button>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default CreatePage;
