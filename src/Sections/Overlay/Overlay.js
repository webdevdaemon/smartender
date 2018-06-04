import React from 'react'
import PropTypes from 'prop-types'

const Overlay = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false,
		}
	}

	static propTypes = {
		visible: PropTypes.bool,
	}

	componentDidMount() {
		if (this.props.visible) {
			this.setState({visible: true})
		}
	}
	
	render() {
		return (
			<div className='overlay'>
				{
					
				}
			</div>
		)
	}
}



export default Overlay
