import React from 'react'
import { Button, List } from 'semantic-ui-react'

const Tweet = (props) => {

    return(
        <List.Item>
        <List.Content floated='right'>
          {/* <Button onClick={()=>{}} >Add</Button> */}
        </List.Content>
        <List.Content>
            <List.Header>{props.name} <a target="blank" href={"https://twitter.com/user/status/"+ props.id}>Visit</a></List.Header>
            <List.Description>Created at: {props.created_at}</List.Description>
            <p>{props.text}</p>
            <p>Liked by {props.favourite_count}</p>
            <h2>Classification: Neutral</h2>
            <p>Score</p>
        </List.Content>
      </List.Item>
    )
}

export default Tweet