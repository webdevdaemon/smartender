/**
 * @augments {Component<{ name:string, label:string,    placeholder:string, ingredients:array, disabled:boolean,    customClass:string,>}
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Suggest} from '@blueprintjs/core'

class IngredientFieldSet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }

  }

  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    ingredients: PropTypes.array,
    disabled: PropTypes.bool,
    customClass: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    placeholder: '',
    ingredients: ['no matches...'],
    disabled: false,
    customClass: '',
  }

  render() {
    const {
      name, label, placeholder, ingredients, disabled, customClass, onChange
    } = this.props
    return disabled ? null : (
      <fieldset disabled={disabled} className={customClass}>
        <legend>{'ingredients list'}</legend>
        <Suggest
          initialContent={['no matches...']}
          items={Object.entries(INGREDIENTS).reduce((acc, curr) => {
            return [...acc, ...curr[1]]
        }, [])}
        inputValueRenderer={item => `${item}`}
          onChange={(e) => {
            e.persist()
            onChange(e.target.value)
          }}
        >
        </Suggest>
        <label htmlFor={name}>{label}</label>
      </fieldset>
    )
  }
}

export default IngredientFieldSet
