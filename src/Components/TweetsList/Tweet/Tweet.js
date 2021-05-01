import React from 'react'
import { Button, List } from 'semantic-ui-react'

const Tweet = (props) => {
    let hashtags = null
    if(props.hashtags.length>0){
      hashtags = <h4>Hashtags: {props.hashtags.map(hashtag => <div className="hashtag">#{hashtag} </div>)}</h4>
    }
    return(
        <List.Item>
        <List.Content floated='right'>
          {/* <Button onClick={()=>{}} >Add</Button> */}
        </List.Content>
        <List.Content>
            <List.Header>{props.name} <a target="blank" href={"https://twitter.com/user/status/"+ props.id}>Visit</a></List.Header>
            <List.Description>Created at: {props.created_at} - Liked by {props.favourite_count}</List.Description>
            <p></p>
            <p>{props.text}</p>
            <h4>
              <p>Classification Vader: {props.vader}</p> 
              <p>Classification BOW: {props.bow}</p>
            </h4>
            {hashtags}
        </List.Content>
      </List.Item>
    )
}

export default Tweet