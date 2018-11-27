import React, {Component} from 'react'
import {Hero} from 'bloomer'

class Home extends Component {
  render() {
    return (
      <div className='tab tab__home'>
        <Hero
          renderHead={() => (
            <React.Fragment>

            </React.Fragment>
          )}
          renderBody={() => (
            <React.Fragment>

            </React.Fragment>
          )}
          renderFoot={() => (
            <React.Fragment>

            </React.Fragment>
          )}
            
                    
        >

        </Hero>
        <section className='section tab__home--logo'>
          <h1 className="tab__home--logo--text">{'Barbacker'}</h1>
        </section>
      </div>
    )
  }
}

export default Home
