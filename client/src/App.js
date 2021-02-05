import React, {useEffect, useState} from "react"
import './App.css';
import QueryTweets from "./Components/QueryTweets/QueryTweet"
import TopMenu from "./Components/TopMenu/TopMenu"

function App() {
  // const [message, setMessage]= useState("")

  // useEffect(()=>{
  //   fetch("/home").then(response=> response.json().then(data=>{
  //     setMessage(data.name)
  //   }))
  // }, []) //on runs when component first mounts
  return (
    <div className="App">
      {/* <p>{message}</p> */}
      <TopMenu/>
      <QueryTweets/>
    </div>
  );
}

export default App;
