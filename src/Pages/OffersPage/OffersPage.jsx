import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import "./OffersPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Fetch } from "../../Components/Fetch/Fetch";

export const OffersPage = () => {
  return (
    <div className="page">
      <h3 className="backheader">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Ofertas
        <div></div>
      </h3>
      <div className="container-black">
        <div className="Buscador">
          <BiSearch className="lupa" />
          <input
            className="dentro-buscador"
            type="text"
            id="buscar"
            placeholder="Buscar"
          />
          <TbAdjustmentsHorizontal/>
        </div>
        <div className="botones-principales">
          <button className="botonera-message-1">Abiertas</button>
          <button className="botonera-message-1">Cerradas</button>
        </div>
        <div className="homeoffers">
          <Fetch></Fetch>
        </div>
      </div>
      <Nav />
    </div>
  );
};
