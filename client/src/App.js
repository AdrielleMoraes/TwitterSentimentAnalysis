import React from "react"
import QueryTweets from "./Components/QueryTweets/QueryTweet"
import TopMenu from "./Components/TopMenu/TopMenu"
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div>
      <TopMenu/>
      <Container><QueryTweets/></Container>
      
    </div>
  );
}

export default App;
