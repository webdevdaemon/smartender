import React, {Component} from 'react'

class TabAbout extends Component {
  render() {
    return <div className="tab tab__about">
        <section className="section tab__section-top">
          <h2 className="title-text">{'About'}</h2>
        </section>
        <section className="section tab__section">
          <h4 className="tab__section--headline">{'About Barbacker...'}</h4>
          <p className="tab__section--para">
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti obcaecati expedita eos temporibus ab maxime dolore at, harum non quod ullam velit fugiat quas.'
            }
          </p>
        </section>
        <section className="section tab__section">
          <h4 className="section__title--text">{'About The Author...'}</h4>
          <p className="tab__section--para">
            {
              'Consectetur adipisicing elit. Provident deleniti obcaecati expedita eos temporibus ab maxime dolore at, harum non quod ullam velit fugiat quas.'
            }
          </p>
        </section>
      </div>
  }
}

export default TabAbout
