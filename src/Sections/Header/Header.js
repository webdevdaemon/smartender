import React from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import Masthead from '../../Components/Masthead/Masthead'
import styled from 'react-emotion'

const StyledHeader = styled('header')`
  background: #EBF1F5;
  border-bottom: solid 1px #bfbfbf;
  box-shadow: 0px 3px 2px #444;
  position: absolute;
  top:0; bottom: auto; left: 0; right: 0;
  max-height: 10vh;
  min-height: 7vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

const Header = props => (
  <StyledHeader className="header">
    <Masthead title={'brbckr'} />
  </StyledHeader>
)

Header.propTypes = {
  setAuthState: PropTypes.func,
  authenticated: PropTypes.bool,
  admin: PropTypes.bool,
  user: PropTypes.object,
}

// function UserButton({avatar}) {
//   return (
//     <UB className avatar={avatar} >
//       <Link to={{pathname: '/account'}}>
//         {avatar ? (
//           <div className="user__avatar--wrapper account__button">
//             <div className="user__avatar" />
//           </div>
//         ) : (

//       )}
//       </Link>
//     </UB>
//   )
// }

// function BackButton({location, history, ...props}) {
//   return (
//     <a
//       onClick={() => {
//         history.goBack()
//       }}
//       className="back-button">
//       <FaAngleLeft height="7vh" width="7vh" />
//     </a>
//   )
// }

export default withRouter(Header)
