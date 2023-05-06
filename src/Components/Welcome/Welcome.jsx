import React from 'react';
import Slider from '../Slider/Slider';
import group7 from '../../assets/group7.png'
import welcome1 from '../../assets/welcome1.png'
import welcome2 from '../../assets/welcome2.png'
import welcome3 from '../../assets/welcome3.png'
import whitelogo from '../../assets/whitelogo.png'
import logoT from '../../assets/logoT.png'
import './Welcome.css'


function Welcome() {
    const pages = [
        <div className="welcomeContainer welcomeContainer-black ">
                <img cassName="img-welcome" alt="group7" src={group7} />
        </div>,

        <div className="welcomeContainer welcomeContainer-black" >
                <a className="welcomeText">saltar</a>
                <img className="img-welcome " src={logoT} alt="logo" />
                <p className="welcomeText1">Nos encanta verte por</p>
                <img className="img-welcome " src={whitelogo} alt="logo" />
                <p className="welcomeText">Atrae y enamora a los mejores candidatos</p>
                <button className="button-white">Comenzar</button>
        </div>,

        <div className="welcomeContainer" >
                <a className="welcomeText">saltar</a>
                <img className ="img-welcome" src={welcome1} alt="logo" />
                <p className="welcomeText1">Meettalent es una herramienta que te ayuda a conectar con el mejor talento</p>
                <button className="button-black">Continuar</button>
        </div>,

        <div className="welcomeContainer" >
                <a className="welcomeText">saltar</a>
                <img className="img-welcome2" src={welcome2} alt="logo" />
                <p className="welcomeText1">Crear eventos únicos para interactuar con los candidatos desde cualquier lugar</p>
                <button className="button-black">Continuar</button>
        </div>,

        <div className="welcomeContainer" >
            <a className="welcomeText">saltar</a>
            <img className="img-welcome " src={welcome3} alt="logo" />
            <p className="welcomeText1">Agilizar tus procesos de selección de una manera sencilla, potente y rápida</p>
            <button className="button-black">Unirme ahora</button>  
        </div>
    ];

    return (
        <div>
            <Slider pages={pages} />
        </div>
    );
}

export default Welcome;