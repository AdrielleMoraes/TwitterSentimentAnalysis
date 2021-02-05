import React from 'react'
import TweetsList from "../TweetsList/TweetsList"
import { Container } from 'semantic-ui-react'
import SearchBar from "../SearchBar/SearchBar"

const QueryTweet = (props) => {

    return(<Container>
        <SearchBar/>
        <TweetsList/>
    </Container>)
}

export default QueryTweet