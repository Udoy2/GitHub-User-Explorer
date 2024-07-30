import React, { useContext, useEffect, useState } from "react";
import "./Popup.css";
import { UserContext } from "./datalayer/userContext";
import VerticleCard from "./VerticleCard";
function Popup({avatar}) {
  const [currentUser,setCurrentUser] = useContext(UserContext);
  const [userDetails,setUserDetails] = useState([]);
  const [followers,setfollowers] = useState([]);
  const [loading,setLoading] = useState(true);

  async function getGithubUserDetails(url,stateSetter) {
    try {
      const request = await fetch(
        url
      );
      const data = await request.json();
      console.log(data);
      stateSetter(data);
      console.log(userDetails);
    } catch (error) {
      console.error("error fetching the data: ", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    if(currentUser != ""){
      let url = `https://api.github.com/users/${currentUser}`;
      getGithubUserDetails(url,setUserDetails);
      url = `https://api.github.com/users/${currentUser}/followers`;
      getGithubUserDetails(url,setfollowers);
    }
  },[currentUser])
  return (
    <>

    <div className={`wrapper ${currentUser != ""? "open" : "close"}`}></div>
    <div className={`popupcard ${currentUser != ""? "open" : "close"}`}>
      <button className="close_button" onClick={()=>setCurrentUser("")}>✖</button>
      <div >
        <img src={userDetails.avatar_url} className="avatar"/>
      </div>
      <span className="username">{!loading?`@${userDetails.login}`:"Loading..."}</span>
      <br /><span className="name">{userDetails.name}</span>
      <div className="user_data">
        {followers.map((follower)=><VerticleCard follower={follower}/>)}
      </div>
    </div>
    </>
  );
}

export default Popup;
