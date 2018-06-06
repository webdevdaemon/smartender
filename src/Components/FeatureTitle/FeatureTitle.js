import React from 'react'
 import PropTypes from 'prop-types'

const FeatureTitle = ({title}) =>
	<div className='feature-title-wrapper'>
		<h2 className='feature-title-text'>{title}</h2>
	</div>

FeatureTitle.propTypes = {
	title: PropTypes.string,
}

export default FeatureTitle