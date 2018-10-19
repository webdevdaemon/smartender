import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import {uiConfig} from '../../base'
// import PropTypes from 'prop-types'

class TabAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    const {__authSetState__} = this.props
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        __authSetState__({user: firebase.auth().currentUser})
      } else {
        __authSetState__({user: null})
      }
    })
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const {user} = this.state
    return (
      <div className="tab tab__account">
        {!firebase.auth().currentUser ? (
          <div className="section tab__section">
            <h2 className="tab__section--headline">Account Info</h2>
            <h4>Login/Signup for Details</h4>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        ) : (
          <div className="section tab__section">
            <h2 className="tab__section--headline">My Account</h2>
            <p className="tab__section--para">
              {`Welcome ${
                firebase.auth().currentUser.displayName
              }! You are now signed-in!`}
              <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
            </p>
            <ul className="page-account--account-details" />
          </div>
        )}
      </div>
    )
  }
}

export default TabAccount
