import React from "react";
import "./NotificationsPage.css";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./NotificationsPage.css";

function NotificationsPage() {
  return (
    <div className="notipage">
      <h3 className="texto-noti">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Notificaciones
      </h3>
      <div className="container">
      <Nav></Nav>
      </div>
    </div>
  );
}

export default NotificationsPage;
