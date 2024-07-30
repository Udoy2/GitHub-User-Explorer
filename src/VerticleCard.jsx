import React from "react";
import "./VerticleCard.css";
function VerticleCard({follower}) {
  console.log(follower);
  return (
    <div className="verticleCard">
      <img src={follower.avatar_url} className="verticle_avatar" />
      <div className="data">
        <span className="username">@{follower.login}</span>
      </div>
    </div>
  );
}

export default VerticleCard;
