import React from "react"
import { List } from 'semantic-ui-react'
import Tweet from "./Tweet/Tweet"


const TweetsList = (props) => {

    return (
        <div className="TweetsList" >
            <h1>Tweets</h1>
            <p>Showing {props.APIresponse.tweets.length} results</p>
            <p>Results for query: {props.APIresponse.query}</p>
            <List selection divided verticalAlign='middle'>
                {props.APIresponse.tweets.map(tweet => {
                    return <Tweet
                        name={tweet.author_name}
                        key={tweet.id}
                        id={tweet.id}
                        created_at={tweet.created_at}
                        text={tweet.text}
                        text_pre = {tweet.pre}
                        hashtags={tweet.hashtags}
                        favourite_count={tweet.favourite_count}
                    />
                })}
            </List>
        </div>

    )
}

export default TweetsList