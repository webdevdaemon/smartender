import React from 'react'
import ButtonRandom from '../ButtonRandom'

const RandomizerWrapper = ({id, recipe}) => (
  <div className='randomizer-wrapper'>
    <ButtonRandom id={id} recipe={recipe} />
  </div>
)

export default RandomizerWrapper