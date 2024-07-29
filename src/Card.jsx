import React from "react";
import "./Card.css";
function Card({username,name,avatar}) {
  return (
    <div className="card">
      <div >
        <img src={avatar} className="avatar"/>
      </div>
      <span className="username">@{username}</span>
    </div>
  );
}

export default Card;
