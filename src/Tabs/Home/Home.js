import React, {Component} from 'react'

class Home extends Component {
  render() {
    return <div className="home center-center" style={{height: '100%'}}>
        <div style={{width: '80%'}}>
          <h1 className="logo-font">{'Barbacker'}</h1>
          <p style={{fontSize: '1.5em', textAlign: 'center', fontWeight: '500', marginTop: '1em'}}>
            Built FOR Bartenders, BY a Bartender,
            <br />
            with LOVE and ADMIRATION
            <br />
            <br />
            for the unsung heroes of the night.
            <br />
            The hard-working, superhuman, BMFers powering every packed club,
            <br />
            every lounge, every tavern, every neighborhood dive,
            <br />
            and every crackin' house party worth going to...
            <br />
            <br />
            This one's for YOU - CHEERS!!!
            <br />
            {'- Charles Morgan'}
            <br />
            <i>Bartender, Developer</i>
            <br />
            <a href="mailto:@cmorganwebdev@gmail.com">@cmorganwebdev@gmail.com</a>
          </p>
        </div>
      </div>
  }
}

export default Home
