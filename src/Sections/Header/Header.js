import React from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'

import Masthead from '../../Components/Masthead'
import FaUser from 'react-icons/lib/fa/user'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const Header = props => (
  <header className="header">
    <BackButton {...props} />
    <Masthead title="brbckr" />
    <UserButton avatar={props.authenticated && props.avatar} />
  </header>
)

Header.propTypes = {
  setAuthState: PropTypes.func,
  authenticated: PropTypes.bool,
  admin: PropTypes.bool,
  user: PropTypes.object,
}

function UserButton({avatar}) {
  return (
    <Link to={{pathname: '/account'}}>
      {avatar ? (
        <div className="avatar-wrapper account-button">
          <div className="avatar" style={{backgroundImage: `url(${avatar})`}} />
        </div>
      ) : (
        <button className="bp3-button bp3-intent">
          <FaUser height="5.5vh" width="5.5vh" />
        </button>
      )}
    </Link>
  )
}

function BackButton({location, history, ...props}) {
  return (
    <a onClick={() => {history.goBack()}} className="back-button" >
      <FaAngleLeft height="7vh" width="7vh" />
    </a>
  )
}

export default withRouter(Header)
