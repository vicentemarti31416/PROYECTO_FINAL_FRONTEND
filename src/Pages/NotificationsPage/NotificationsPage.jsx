import React, { useEffect, useState } from "react";
import "./NotificationsPage.css";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

function NotificationsPage() {
  const [notification, setNotification] = useState([]);

  const api_key = "aac10c0167024355b54ef4b9c1285cd5";

  const getNotification = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
      )
      .then((res) => {
        setNotification(res.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <div className="notipage">
      <h3 className="texto-noti">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Notificaciones
      </h3>
            <div className="container-black">
     {/*  <div className="container">  */}
        {notification.map((notif, index) => (
          <div className="job-news" key={index}>
            <h1>{notif.author}</h1>
            <h2>{notif.title}</h2>
            <img style={{width: "400px", height: "300px", objectFit: "cover"}} src={notif.urlToImage} alt=""/>
            <h4>{notif.description}</h4>
            <h5 style={{color: "blue"}}>{notif.content}</h5>
            <h3>{notif.publishedAt}</h3>
          </div>
        ))}
        <Nav></Nav>
      </div>
    </div>
  );
}

export default NotificationsPage;
// +/Gk&Zqw/tdJ783