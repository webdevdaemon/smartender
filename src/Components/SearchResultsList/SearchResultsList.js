/**
 * @augments {Component<{ listResults:array, match:object, >}
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import SearchResultLineItem from '../SearchResultLineItem/SearchResultLineItem'

const cardStyle = {
  recipe: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tag: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}


class SearchResultsList extends Component {
  static propTypes = {
    isTags: PropTypes.bool,
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
          listResults.map(recipeObj => {
            const {name, id, howTo, ...data} = recipeObj
            return (
              <SearchResultLineItem key={`li-${id}`} data={data}>
                <Link
                  className="link"
                  style={cardStyle.recipe}
                  key={`li-${id}`}
                  to={{
                    pathname: `/recipe/${id}`,
                    state: {
                      recipe: () => recipeObj,
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
