import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import './CandidateDetails.css';
import { IoIosArrowBack } from "react-icons/io";
import {AiOutlineHeart} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import{AiOutlineInstagram} from "react-icons/ai"
import{FaFacebookF} from "react-icons/fa";
import {MdOutlineDateRange} from "react-icons/md";
import {FiMapPin} from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";



export const CandidateDetails = () => {
  const [candidate, setCandidate] = useState(null);
  const { id } = useParams();

  const getCandidate = () => {
    axios
      .get(`http://localhost:8000/candidates/${id}`)
      .then((res) => {
        setCandidate(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCandidate();
  },);

  return (
    <div className="page page-negativo">
    <div>
    <h3  className="barra_candidato">
    <Link to= {"/candidates"}>
          <IoIosArrowBack className="flexa"></IoIosArrowBack>
        </Link>
        Candidatos
        <AiOutlineHeart className ="heart"></AiOutlineHeart>
      </h3>
       </div>


      <div className="container">

          {candidate && (
            <div className="contenedor_candidato_letras">
            <img className="cand-image" src={candidate.image} alt="candidate" />
              <h3 className="nombre_candidato" >
                {candidate.name} {candidate.surname}
              </h3>
              <h3>{candidate.profession}</h3>
              <div>
                {Object.entries(candidate.contact)
                  .filter(([key]) => key !== "_id")
                  .map(([key, value]) => (
                    <p key={key}>
                      {key}: <a href={value}>{value}</a>
                    </p>
                  ))}
                  <div className="redes_sociales_candidatos">
                  <BsTwitter className="twitter_candidatos"></BsTwitter>
                  <AiOutlineInstagram className="insta_candidatos"></AiOutlineInstagram>
                  <FaFacebookF className="face_candidatos"></FaFacebookF>
                  </div>

              </div>
              <div className="datoscand">
                <p className="datospersonales">Datos personales</p>
              <div className="iconospersonales">
               
              </div>
              <p><MdOutlineDateRange className="i1"/>{candidate.age}</p>
              <p><FiMapPin className="i2"/>{candidate.location}</p>
              <p><AiOutlineMail className="i3"/>{candidate.email}</p>
              <p><BsTelephone className="i4"/>{candidate.phone}</p>
              </div>
              <div className="keywords">
                <p>Palabras clave del perfil</p>
                <div>
                  {candidate.keywords.map((keyword, item) => (
                    <p key={item}>{keyword}</p>
                  ))}
                </div>
              </div>
              <div className="education">
                <p>Educacion: {candidate.education}</p>
              </div>
            </div>
          )}
        </div>
       
      </div>

  );
};
