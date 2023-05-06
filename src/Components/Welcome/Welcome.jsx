import React, { useEffect, useState } from 'react';
import group7 from '../../assets/group7.png';
import welcom1 from '../../assets/welcom1.png';
import welcom2 from '../../assets/welcom2.png';
import welcom3 from '../../assets/welcom3.png';
import whitelogo from '../../assets/whitelogo.png';
import logoT from '../../assets/logoT.png';
import { Link } from 'react-router-dom';

import './Welcome.css';

function Welcome() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleNextClick = () => {
        const page = currentPage === pages.length - 1 ? 0 : currentPage + 1;
        setCurrentPage(page);
    };
    const pages = [
        isLoading ? (
            <div className="welcome__container welcome__container--black">
                <img className="img-welcome" src={group7} alt="logo" />
            </div>
        ) : (
            <div className="welcome__container welcome__container--black">
                <Link to={'/login'} className="welcome__text">saltar</Link>
                <img className="img-welcome " src={logoT} alt="" />
                <p className="welcome__text--1 welcome__text--bold">Nos encanta verte por</p>
                <img className="img-welcome" src={whitelogo} alt="" />
                <p className="welcome__text">Atrae y enamora a los mejores candidatos</p>
                <button onClick={handleNextClick} className="button-white">Comenzar</button>
            </div>
        ),

        <div className="welcome__container" >
            <Link to={'/login'} className="welcome__text--1">saltar</Link>
            <img className="img-welcome" src={welcom1} alt="" />
            <p className="welcome__text--1">Meettalent es una herramienta que te ayuda a conectar con el mejor talento</p>
            <button onClick={handleNextClick} className="button-black">Continuar</button>
        </div>,

        <div className="welcome__container" >
            <Link to={'/login'} className="welcome__text--1">saltar</Link>
            <img className="img-welcome2" src={welcom2} alt="" />
            <p className="welcome__text--1">Crear eventos únicos para interactuar con los candidatos desde cualquier lugar</p>
            <button onClick={handleNextClick} className="button-black">Continuar</button>
        </div>,

        <div className="welcome__container" >
            <Link to={'/login'} className="welcome__text--1">saltar</Link>
            <img className="img-welcome" src={welcom3} alt="" />
            <p className="welcome__text--1">Agilizar tus procesos de selección de una manera sencilla, potente y rápida</p>
            <Link to={'/login'} className="button-black"><button className="button-black" >Unirme ahora</button></Link>
        </div>
    ];

    return (
        <div>

            <div class="slider__container">
                <div class="slider">
                    {pages[currentPage]}
                </div>
                <div class="slider__circles">
                    <span class="slider__circle"></span>
                    <span class="slider__circle"></span>
                    <span class="slider__circle"></span>
                    {/* <!-- Se agregarían más elementos span si se necesitan más círculos --> */}
                </div>
            </div>

        </div>

    );
}

export default Welcome;

