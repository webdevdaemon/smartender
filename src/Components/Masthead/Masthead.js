import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const StyledH2 = styled('h2')`

`
const StyledMasthead = styled('section')`
  
`

const Masthead = ({title}) =>
  <StyledMasthead className='masthead'>
    <StyledH2 className='masthead__text'>
      {title}
    </StyledH2>
  </StyledMasthead>

Masthead.propTypes = {title: PropTypes.string.isRequired}

export default Masthead
