import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import "./AuthButton.css";

export default function AuthButton() {
  const { jwt, setJwt } = useContext(JwtContext);
  /*  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email_verified");
    setJwt(null);
    navigate("/");
  };
  return jwt && user ? (<div className="userInfo"> <p>Welcome! {user}</p> <button onClick={signOut} className="button-signOut">Sign out</button>
      </div>
  ) : (
      <div className="userInfo">
        <p>You are not logged in.</p>
      </div>
  );
*/
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
    <div className="welcome-post">
      <p> Welcome! {user} <button className="logout" onClick={signOut}>Sign out</button>
      </p>
    </div>
  ) : (
    <div className="welcome-post">
      <p>You are not logged in.</p>
    </div>
  );
}
