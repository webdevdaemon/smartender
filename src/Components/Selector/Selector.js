import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Selector extends Component {
  state = {
    // no 'Q' or 'X' intentionally!!! :-)
    alpha: ' ABCDEFGHIJKLMNOPRSTUVWYZ',
    selected: '',
  }

  static propTypes = {
    currentValue: PropTypes.string,
    callParent: PropTypes.func,
  }

  onSelect = (evt, cb, val) => {
    console.log({ evt })
    this.setState(
      prev => ({ selected: val || ' ' }),
      () => {
        cb(val)
      },
    )
  }

  render() {
    let { currentValue, callParent } = this.props
    let { alpha } = this.state
    return (
      <div className="selector-main">
        <div className="selector-form-wrapper">
          <form className="selector-form"
            id="alphabet-form" action=""
          >
            <select
              name="ingredients-by-alphabet"
              id="alphabet"
              value={currentValue}
              onChange={event => {
                let val = event.target.selectedOptions[0].value
                this.onSelect(event, callParent, val)
              }}
            >
              {
                alpha.split('').map(char => (
                  <option key={'K-' + char} value={char}>
                    {char}
                  </option>
                ))
              }
            </select>
          </form>
        </div>
      </div>
    )
  }
}

export default Selector
