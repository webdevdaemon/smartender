import React from 'react'
import {withRouter} from 'react-router-dom'

import Masthead from '../../Components/Masthead'
import FaBars from 'react-icons/lib/fa/bars'
import FaCaretLeft from 'react-icons/lib/fa/caret-left'

const MenuButton = ({toggleSidebar: onClick}) => (
  <a onClick={onClick} className="menu-button">
    <FaBars height="5vh" width="5vh" />
  </a>
)

const BackButton = ({location, history}) => {
  return (
    <a onClick={history.goBack} className="back-button">
      <FaCaretLeft height="7vh" width="7vh" />
    </a>
  )
}

const Header = props => (
  <div className="header">
    <BackButton {...props}/>
    <Masthead title="brbckr"/>
    <MenuButton {...props}/>
  </div>
)

export default withRouter(Header)
