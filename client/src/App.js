import React from "react"
import './App.css';
import QueryTweets from "./Components/QueryTweets/QueryTweet"
import TopMenu from "./Components/TopMenu/TopMenu"

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <QueryTweets/>
    </div>
  );
}

export default App;
