import React from 'react'
import PropTypes from 'prop-types'


const Masthead = ({ title, subTitle }) => (
  <div className='masthead'>
    <h2 className='masthead-title'>
      {title}
    </h2>
    <p className='masthead-subtitle'>
      {subTitle}
    </p>
  </div>
)
Masthead.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}
Masthead.defaultProps = {
  title: 'SMARTENDER',
  subTitle: '4 \'tenders BY \'tenders',
}


export default Masthead
