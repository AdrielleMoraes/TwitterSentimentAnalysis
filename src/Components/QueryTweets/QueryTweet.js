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
        })).catch(error => {
            setLoadingAPIResponse(false)
          })
    }

    const RequestAPIHandler = (query) => {
        setLoadingAPIResponse(true)
        fetchTweets(query)
    }

    const warning_message = showAPIResponse? null:<p className='warning-query'>The first query may take a while to load.</p>
    return (
        <div>
            {warning_message}
            <SearchBar loadingAPIResponse={loadingAPIResponse} onClickSearch={RequestAPIHandler} />
            <TabMenu data={data} showAPIResponse={showAPIResponse}></TabMenu>
        </div>)
}

export default QueryTweet