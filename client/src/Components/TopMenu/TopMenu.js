import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const TopMenu = (props) => {

    return(  
      <Breadcrumb size="huge">
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>About</Breadcrumb.Section>
      </Breadcrumb>)
}

export default TopMenu