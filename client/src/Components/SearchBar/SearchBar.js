import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBar = (props) => {

    //add loading property when loading results and action={{ icon: 'search' }}
    return(<Input  fluid icon='search' placeholder='Search tweets...' />)
}

export default SearchBar