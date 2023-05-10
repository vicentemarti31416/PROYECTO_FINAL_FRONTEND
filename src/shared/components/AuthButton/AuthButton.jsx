import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import "./AuthButton.css";

export default function AuthButton() {
  const { jwt, setJwt } = useContext(JwtContext);

  let navigate = useNavigate();

  const userJSON = localStorage.getItem("name");
  const user = userJSON ? JSON.parse(userJSON) : null;

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email_verified");
    localStorage.clear();
    setJwt(null);
    navigate("/");
  };

  return jwt && user ? (
    <div className="userInfo">
      <p> Welcome! {user} </p>
      <button className="button-logout" onClick={signOut}>logout</button>
    </div>
  ) : (
    <div className="userInfo">
      <p>You are not logged in.</p>
    </div>
  );
}
