import React from 'react';
import './createpage.css';
import Nav from "../../Components/Nav/Nav"
import BlueBase from '../../Components/BlueBase/BlueBase';
import { Link } from "react-router-dom";



function CreatePage() {
  return (
    <div className='create'>
    <BlueBase></BlueBase>
    <img alt="imagen"/>
    <Link to={"/createoffer"}>
  <button>Crear oferta</button>
  </Link>
    <img alt="imagen"/>
  <button>Crear prueba</button>
      <Nav></Nav>
    </div>
  )
}

export default CreatePage
