import React from 'react'
import { Form, Button, Icon, Input } from 'semantic-ui-react'

const SearchBar = (props) => {

    const hello = () => { return console.log("hello") }
    //add loading property when loading results and action={{ icon: 'search' }} onClickSearch
    return (
        <Form loading={false}>
            <Form.Group>
                <Form.Field width={14}>
                    <Input placeholder='Machine Learning, Artificial Intelligence, Programming...'></Input>
                </Form.Field> 
                <Button icon floated="right" onClick={hello} width={2}><Icon name="search" /></Button>
            </Form.Group>
        </Form>
    )
}

export default SearchBar