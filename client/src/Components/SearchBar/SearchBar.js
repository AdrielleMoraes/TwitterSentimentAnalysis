import React, { useState, useRef, createRef } from 'react'
import { Form, Icon, Input } from 'semantic-ui-react'

const SearchBar = (props) => {

    const [query, setQuery] = useState('')

    const onChangeHandler = (event) => {
        setQuery(event.target.value)
    }

    //add loading property when loading results and action={{ icon: 'search' }} onClickSearch
    return (
        <Form onSubmit={() => props.onClickSearch(query)} loading={false}>
            <div className="teste">
                <Input
                    placeholder='Machine Learning, Artificial Intelligence, Programming...'
                    onChange={onChangeHandler} />
                <button type="submit" className="buttontest"><Icon name="search" /></button>

            </div>


        </Form>
    )
}

export default SearchBar