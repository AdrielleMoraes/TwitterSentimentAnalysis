import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'
import Tweet from "./Tweet/Tweet"

const TweetsList = (props) => {

    const names = ["Lena", "Lindsey", "Mark", "Molly"]
    return(
        <List selection divided verticalAlign='middle'>
            {names.map(tweet=>{
                return <Tweet name={tweet} key={tweet}/>
            })}
        </List>
    )
}

export default TweetsList