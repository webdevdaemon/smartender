import React from 'react'
import PropTypes from 'prop-types'
 
const FeatureImage = ({src, vw}) =>
	<div className='feature-image-wrapper'>
		<div className='feature-image'
			src={`${src}`}
			style={{
				backgroundImage: `url(${src})`,
				backgroundPosition: 'center center',
				height: '33vh',
				width: `${vw}vw`,
			}}></div>
	</div>

FeatureImage.propTypes = {
	src: PropTypes.string,
	vw: PropTypes.number,
}
FeatureImage.defaultProps = {
	vw: 100,
}


export default FeatureImage
