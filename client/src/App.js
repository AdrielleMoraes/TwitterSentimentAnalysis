import React, {useEffect, useState} from "react"
import './App.css';

function App() {
  const [message, setMessage]= useState("")

  useEffect(()=>{
    fetch("/home").then(response=> response.json().then(data=>{
      setMessage(data.name)
    }))
  }, []) //on runs when component first mounts
  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
