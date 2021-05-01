import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import "./TopMenu.css"

const TopMenu = (props) => {

  return (
    <div className="TopMenu">
      <Breadcrumb className="Breadcrumb" size="huge">
        <a href='https://adriellemoraes.com/' >Home</a>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Tweets</Breadcrumb.Section>
      </Breadcrumb>
    </div>
  )
}

export default TopMenu