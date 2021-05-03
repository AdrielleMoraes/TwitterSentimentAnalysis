import React from "react"
import QueryTweets from "./Components/QueryTweets/QueryTweet"
import TopMenu from "./Components/TopMenu/TopMenu"
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div>
      <TopMenu/>
      <Container>
        <h1>Twitter Sentiment Analysis Tool</h1>
        <p>Enter items on search bar to start. Tweets are classified in:</p>
        <ul>
          <li>Positive</li>
          <li>Neutral</li>
          <li>Negative</li>
        </ul>
        <p><a href='https://github.com/AdrielleMoraes/TwitterSentimentAnalysis'>More info</a></p>
        <QueryTweets/>
      </Container>
    </div>
  );
}

export default App;
