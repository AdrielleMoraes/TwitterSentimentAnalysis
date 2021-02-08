import React, {useState} from 'react'
import TweetsList from "../TweetsList/TweetsList"
import { Container } from 'semantic-ui-react'
import SearchBar from "../SearchBar/SearchBar"

const QueryTweet = (props) => {

    const [data, setData] = useState({tweets:[]})

    const fetchTweets = (query)=>{
        fetch(`/retrieveFromAPI?query=${query}`).then(response => response.json().then(data => {
            setData(data)
        }))
    }

    const RequestAPIHandler= (query) => {
        fetchTweets(query)
    }

    return(<Container>
        <SearchBar onClickSearch = {RequestAPIHandler}/>
        <TweetsList APIresponse ={data}/>
    </Container>)
}

export default QueryTweet