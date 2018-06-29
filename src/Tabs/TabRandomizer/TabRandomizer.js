import React from 'react'
import PropTypes from 'prop-types'
import FeatureTitle from '../../Components/FeatureTitle'
import RandomizerWrapper from '../../Components/RandomizerWrapper'

const TabRandomizer = props => (
	<div className='randomizer'>
		<FeatureTitle title={'Rapid\nRecipe\nRandomizer'} />
		<RandomizerWrapper />
	</div>
)

TabRandomizer.propTypes = {
	title: PropTypes.string,
}

export default TabRandomizer
