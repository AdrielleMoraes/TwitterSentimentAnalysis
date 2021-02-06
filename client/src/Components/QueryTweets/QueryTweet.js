import React, {useState} from 'react'
import TweetsList from "../TweetsList/TweetsList"
import { Container } from 'semantic-ui-react'
import SearchBar from "../SearchBar/SearchBar"

const QueryTweet = (props) => {

    const [requestFromAPI, requestFromAPISet] = useState(false)

    const RequestAPIHandler= () => {
        return requestFromAPISet(true)
    }

    return(<Container>
        <SearchBar onClickSearch = {RequestAPIHandler}/>
        <TweetsList requestFromAPI ={requestFromAPI}/>
    </Container>)
}

export default QueryTweet