import React from 'react'
import PropTypes from 'prop-types'
 
const FeatureImage = ({src, vw, children}) =>
		<div className='feature-image'
			src={`${src}`}
			style={{
				backgroundImage: `url(${src})`,
				backgroundPosition: 'contain',
				height: '33vh',
				width: `${vw}vw`,
		}}>
		{children}
	</div>

FeatureImage.propTypes = {
	src: PropTypes.string,
	vw: PropTypes.number,
	children: PropTypes.any,
}
FeatureImage.defaultProps = {
	vw: 100,
}


export default FeatureImage
