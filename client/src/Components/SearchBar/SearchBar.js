import React, {useState, useRef, createRef} from 'react'
import { Form, Button, Icon, Input } from 'semantic-ui-react'

const SearchBar = (props) => {

    const [query, setQuery] = useState('')
    

    const onChangeHandler = (event)=>{
        setQuery(event.target.value)
    }
    
    const hello = () => { console.log(query) }
    //add loading property when loading results and action={{ icon: 'search' }} onClickSearch
    return (
        <Form onSubmit={hello} loading={false}>
            <Form.Group>
                <Form.Field width={14}>
                    <Input
                        
                        placeholder='Machine Learning, Artificial Intelligence, Programming...' 
                        onChange={onChangeHandler}/>
                </Form.Field>
                {/* <Button icon floated="right" type="submit" width={2}><Icon name="search" /></Button> */}
            </Form.Group>
        </Form>
    )
}

export default SearchBar