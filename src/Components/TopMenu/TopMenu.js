import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import "./TopMenu.css"

const TopMenu = (props) => {

  return (
    <div className="TopMenu">
      <Breadcrumb className="Breadcrumb" size="huge">
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>About</Breadcrumb.Section>
      </Breadcrumb>
    </div>
  )
}

export default TopMenu