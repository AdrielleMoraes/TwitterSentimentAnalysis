import React from 'react'
import { Button, List } from 'semantic-ui-react'

const Tweet = (props) => {

    return(
        <List.Item>
        <List.Content floated='right'>
          {/* <Button onClick={()=>{}} >Add</Button> */}
        </List.Content>
        <List.Content>
            <List.Header as='a'>{props.name}</List.Header>
            <List.Description as='a'>{props.text}</List.Description>
            <p>Created at: {props.created_at}</p>
            <p>Liked by {props.favourite_count}</p>
        </List.Content>
      </List.Item>
    )
}

export default Tweet