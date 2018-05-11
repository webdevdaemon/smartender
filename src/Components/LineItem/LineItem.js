import React from 'react'
import PropTypes from 'prop-types'

const LineItem = ({ name, image, glass, alcoholic, index, ...props }) => (
	<li
		className={
			`list-item list-item-clickable ${!alcoholic && 'all-ages-ok'}` }
		key={ `${item}_0${dex}` }
	>yllo[pp]
				<img src={image}/>
		</div>
		<div className='line-item--name'>
				<strong>
						{name}
				</strong>
		</div>
		<div className='line-item--glass'>
				{glass}
		</div>
	</li>
)
LineItem.propTypes = {
		name: PropTypes.string,
		image: PropTypes.string,
		glass: PropTypes.string,
		alcoholic: PropTypes.bool,
		index: PropTypes.number
}
LineItem.defaultProps = {}

export default LineItem
