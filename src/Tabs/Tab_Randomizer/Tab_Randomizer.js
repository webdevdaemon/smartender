import React from 'react'
import PropTypes from 'prop-types'
import FeatureTitle from '../../Components/FeatureTitle'

const Tab_Randomizer = ({ children }) => (
	<div className='randomizer'>
		<FeatureTitle title={'Rapid\nRecipe\nRandomizer'} />
		
	</div>
)

Tab_Randomizer.propTypes = { title: PropTypes.string, }

export default Tab_Randomizer
