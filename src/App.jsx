import React, { useEffect, useState } from 'react'
import "./App.css"
import Card from './Card';
function App() {
  const [loading,setLoading] = useState(false);
  let [pagecount,setPagecount] = useState(1);
  const [user,setUser] = useState([]);
  async function getGithubUser(){
    try {
      const request =  await fetch(`https://api.github.com/users?per_page=${pagecount*10}`);
      const data = await request.json();
      console.log(user);
      setUser([...data]);
      pagecount += 1;
      setPagecount(pagecount);
      console.log(pagecount);
    } catch (error) {
      console.error("error fetching the data: ", error);
    }finally{
      setLoading(false);
    }
  };
  useEffect(()=>{
    if(loading){
      getGithubUser();
    }
  },[loading]);
  return (
    <div className="main">
      <button className="load_btn" onClick={()=>{setLoading(true)}}>Load</button>
      <br />
      {
        loading?
        <span className="loading">Loading.</span>
        :""
      }
      <div className="card_container">
        {user.length>0? user.map((signleUser)=><Card key={signleUser.id} username={signleUser.login}  avatar={signleUser.avatar_url}  />) : "Nothing to show"}
      </div>
    </div>
  )
}

export default App