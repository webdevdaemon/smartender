import React from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'

import Masthead from '../../Components/Masthead'
import FaUser from 'react-icons/lib/fa/user'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

const UserButton = ({avatar}) => (
  <Link to={{pathname: '/account'}}>
    {avatar ? (
      <div className='avatar-wrapper account-button'>
        <div
          className="avatar"
          style={{
            display: 'block',
            backgroundImage: `url(${avatar})`,
            backgroundSize: 'cover',

          }}
        />
      </div>
    ) : (
      <button className="bp3-button bp3-intent">
        <FaUser height="5.5vh" width="5.5vh" />
      </button>
    )}
  </Link>
)

const BackButton = ({location, history, ...props}) => {
  console.log({location, history})
  return (
    <a
      onClick={() => {
        console.log({location, history, props})
        return history.goBack()
      }}
      className="back-button"
    >
      <FaAngleLeft height="7vh" width="7vh" />
    </a>
  )
}

const Header = props => (
  <div className="header">
    <BackButton {...props} />
    <Masthead title="brbckr" subTitle="" />
    <UserButton avatar={props.authenticated && props.avatar} />
  </div>
)

Header.propTypes = {
  children: PropTypes.any,
}

export default withRouter(Header)
