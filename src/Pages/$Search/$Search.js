import React from 'react'
import PropTypes from 'prop-types'
import { CacheContext } from '../../contexts'
import SearchWrapper from '../../Components/SearchWrapper/SearchWrapper'

const $Search = ({match}) => (
	<div>
		<CacheContext.Consumer>{
			(value) => {
				return (
					<div className='search'>
						<h2>{'Drink Search'}</h2>
						<SearchWrapper
							{...value}
							match={match}
						/>
					</div>)
			}}
		</CacheContext.Consumer>
	</div>
)

$Search.propTypes = {match: PropTypes.object,}

export default $Search
