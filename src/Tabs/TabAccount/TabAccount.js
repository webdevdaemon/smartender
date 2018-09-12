import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

const h_ = 'bp3-heading'

class TabAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {authenticated: false}
  }

  // Configure FirebaseUI.
  uiConfig = {
    signInFlow: 'popup', // Popup signin flow rather than redirect flow.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    const {setAuthState} = this.props
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => {
      this.setState({authenticated: !!user, user})
      setAuthState(user)
      console.log({user})
    })
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    if (!this.state.authenticated) {
      return (
        <div>
          <h2 className={`${h_}`}>Account Info</h2>
          <h4>Login/Signup for Details</h4>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      )
    }
    return (
      <div>
        <h1>My Account</h1>
        <p>{`Welcome ${
          firebase.auth().currentUser.displayName
          }! You are now signed-in!`}</p>

        <ul>
          {/*Object.entries(this.props.user).map(([key, val]) => (
            <li>
              <h3>{key}</h3>
              {' => '}
              <h3>{val}</h3>
            </li>
          ))*/}
        </ul>

        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    )
  }
}

export default TabAccount
