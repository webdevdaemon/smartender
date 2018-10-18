/**
 * @augments {Component<{ listResults:array, match:object, >}
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Result from '../Result'
import RenderRecipe from '../RenderRecipe/RenderRecipe'

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

class ListResults extends Component {
  static propTypes = {
    isTags: PropTypes.bool,
    flag: PropTypes.string,
    listResults: PropTypes.array,
    match: PropTypes.object,
    onClickTag: PropTypes.func,
  }

  render() {
    const {listResults, flag, isTags, onClickTag} = this.props
    return (
      <ul className="search-results-list">
        {!listResults.length
          ? null
          : !isTags
            ? listResults.map(obj => (
                <RenderRecipe recipe={obj}>
                  {({recipe, name}) => (
                    <Result key={`li_${name}`} thumbnail={recipe.thumbnail}>
                      <Link
                        className="link"
                        style={cardStyle.recipe}
                        to={{
                          pathname: `/recipe/${name}`,
                          state: {
                            recipe: () => obj,
                            listResults,
                          },
                        }}
                      >
                        <p className="name">{name}</p>
                      </Link>
                    </Result>
                  )}
                </RenderRecipe>
              ))
            : listResults.map(item => (
                <Result
                  item={item}
                  isTag={isTags}
                  style={cardStyle.tag}
                  onClick={onClickTag}
                  flag={flag}
                />
              ))}
        }
      </ul>
    )
  }
}

export default ListResults
