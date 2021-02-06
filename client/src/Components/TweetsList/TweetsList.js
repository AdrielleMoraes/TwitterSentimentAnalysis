import React, { useEffect, useState } from "react"
import { List } from 'semantic-ui-react'
import Tweet from "./Tweet/Tweet"

const TweetsList = (props) => {

    const [data, setData] = useState({tweets:[]})

    useEffect(() => {
        if(props.requestFromAPI)
            fetchTweets()
    }, []) //on runs when component first mounts

    const fetchTweets = ()=>{
        fetch("/home").then(response => response.json().then(data => {
            setData(data)
            console.log(data)
        }))
    }

    return (
        <div>
            {data.tweets.length > 0?
                <div>
                    <p>Showing {data.tweets.length} Results for query: {data.query}</p>
                    <p>Data Fetched in {data.completed_in} s</p>
                    <List selection divided verticalAlign='middle'>
                        {data.tweets.map(tweet => {
                            return <Tweet
                                name={tweet.author_name}
                                key={tweet.id}
                                created_at={tweet.created_at}
                                text={tweet.text}
                                hashtags={tweet.hashtags}
                                favourite_count={tweet.favourite_count}
                            />
                        })}
                    </List>
                </div>:
                <div><p>Please search for tweets</p></div>
            }
        </div>

    )
}

export default TweetsList