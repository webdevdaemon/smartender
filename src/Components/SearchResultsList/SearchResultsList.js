/**
 * @augments {Component<{ listResults:array, match:object, >}
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import SearchResultLineItem from '../SearchResultLineItem/SearchResultLineItem'

const recipeCardStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}

class SearchResultsList extends Component {
  static propTypes = {
    listResults: PropTypes.array,
    match: PropTypes.object,
  }

  render() {
    const {listResults} = this.props
    return (
      <ul className="search-results-list">
        {!listResults.length ? (
          <h3>{'No Matching Recipes...'}</h3>
        ) : (
          listResults.map(obj => {
            const {name, id, howTo, ...data} = obj
            return (
              <SearchResultLineItem key={`li-${id}`} data={data}>
                <Link
                  className="link"
                  style={recipeCardStyle}
                  key={`li-${id}`}
                  to={{
                    pathname: `/recipe/${id}`,
                    state: {
                      recipe: obj,
                      listResults,
                    },
                  }}
                >
                  <p className="name">{name}</p>
                </Link>
              </SearchResultLineItem>
            )
          })
        )}
      </ul>
    )
  }
}

export default SearchResultsList
