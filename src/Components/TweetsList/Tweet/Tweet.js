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
            <List.Description>Created at: {props.created_at} - Liked by {props.favourite_count}</List.Description>
            <p></p>
            <p>{props.text}</p>
            <h4>Classification: {props.text_pre}</h4>
        </List.Content>
      </List.Item>
    )
}

export default Tweet