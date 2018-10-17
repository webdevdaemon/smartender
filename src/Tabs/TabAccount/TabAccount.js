import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import {uiConfig} from '../../base'
import PropTypes from 'prop-types'

const h_ = 'bp3-heading'

class TabAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      user: null,
    }
  }

  static propTypes = {
    setAuthState: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    currentRecipe: PropTypes.object,
    user: PropTypes.object,
    admin: PropTypes.bool,
    updateSearchCache: PropTypes.func,
    updateCurrentRecipe: PropTypes.func,
    drinks: PropTypes.object,
    recipes: PropTypes.object,
    ingredients: PropTypes.object,
    glasses: PropTypes.object,
    categories: PropTypes.object,
    searchCache: PropTypes.object,
    searchCacheRoster: PropTypes.any,
    listResults: PropTypes.array,
  }

  // Configure FirebaseUI.
  /* uiConfig = {
    signInFlow: 'popup', // Popup signin flow rather than redirect flow.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  } */

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    const {setAuthState} = this.props
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const _user = firebase.auth().currentUser
        console.log({_user})
        setAuthState(_user)
      } else {
        const _user = null
        setAuthState(_user)
      }
    })
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const {user} = this.state
    console.log({user})
    return !firebase.auth().currentUser ? (
      <div className="section">
        <h2 className={`${h_}`}>Account Info</h2>
        <h4>Login/Signup for Details</h4>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    ) : (
      <div className="section">
        <h1>My Account</h1>
        <p>{`Welcome ${
          firebase.auth().currentUser.displayName
        }! You are now signed-in!`}</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>

        <ul className="menu-list">
          {/* {Object.entries(firebase.auth().currentUser).map(([key, val]) => {
            return (
              <li className="">
                <p className="">{`${key}: ${val}`}</p>
              </li>
            )
          })} */}
        </ul>
      </div>
    )
  }
}

export default TabAccount
