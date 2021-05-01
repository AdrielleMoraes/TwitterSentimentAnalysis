import React, { useState } from 'react'
import SearchBar from "../SearchBar/SearchBar"
import TabMenu from "../TabMenu/TabMenu"

const QueryTweet = (props) => {

    const [data, setData] = useState({ tweets: [] })
    const [loadingAPIResponse, setLoadingAPIResponse] = useState(false)
    const [showAPIResponse, setShowAPIResponse] = useState(false)

    const fetchTweets = (query) => {
        fetch(`https://tweet-analysis-app.herokuapp.com/api/tweets?query=${query}`).then(response => response.json().then(data => {
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
        <div>
            <SearchBar loadingAPIResponse={loadingAPIResponse} onClickSearch={RequestAPIHandler} />
            <TabMenu data={data} showAPIResponse={showAPIResponse}></TabMenu>
        </div>)
}

export default QueryTweet