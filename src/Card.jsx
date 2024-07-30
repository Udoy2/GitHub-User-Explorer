import React, { useContext } from "react";
import "./Card.css";
import { UserContext } from "./datalayer/userContext";
function Card({username,avatar}) {
  const [currentUser,setCurrentUser] = useContext(UserContext);
  return (
    <div className="card" onClick={()=>setCurrentUser(username)}>
      <div >
        <img src={avatar} className="avatar"/>
      </div>
      <span className="username">@{username}</span>
    </div>
  );
}

export default Card;
