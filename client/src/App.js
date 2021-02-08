import React from "react"
import './App.css';
import QueryTweets from "./Components/QueryTweets/QueryTweet"
import TopMenu from "./Components/TopMenu/TopMenu"
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div>
      <TopMenu/>
      <QueryTweets/>
    </div>
  );
}

export default App;
