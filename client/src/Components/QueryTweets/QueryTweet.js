import React, { useState } from 'react'
import TweetsList from "../TweetsList/TweetsList"
import { Container } from 'semantic-ui-react'
import SearchBar from "../SearchBar/SearchBar"

const QueryTweet = (props) => {

    const [data, setData] = useState({ tweets: [] })
    const [loadingAPIResponse, setLoadingAPIResponse] = useState(false)
    const [showAPIResponse, setShowAPIResponse] = useState(false)

    const fetchTweets = (query) => {
        fetch(`/retrieveFromAPI?query=${query}`).then(response => response.json().then(data => {
            setShowAPIResponse(true)
            setData(data)
            setLoadingAPIResponse(false)
        }))
    }

    const RequestAPIHandler = (query) => {
        setLoadingAPIResponse(true)
        fetchTweets(query)
    }

    return (
        <Container>
            <SearchBar loadingAPIResponse={loadingAPIResponse} onClickSearch={RequestAPIHandler} />
            {showAPIResponse ? <TweetsList APIresponse={data} /> : <p>Enter items on search bar</p>}

        </Container>)
}

export default QueryTweet