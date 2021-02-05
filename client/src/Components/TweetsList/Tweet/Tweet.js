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
            <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
    )
}

export default Tweet