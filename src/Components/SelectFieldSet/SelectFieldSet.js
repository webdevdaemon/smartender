/**
 * @augments {Component<{ name:string, label:string,    placeholder:string, options:array, disabled:boolean,    customClass:string,>}
 */
import React from 'react'
import PropTypes from 'prop-types'

class SelectFieldSet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       value: null,
    }

  }
  
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    disabled: PropTypes.bool,
    customClass: PropTypes.string,
    handler: PropTypes.func,
  }

  static defaultProps = {
    placeholder: '',
    options: ['no matches...'],
    disabled: false,
    customClass: '',
  }

  render() {
    const {
      name, label, placeholder, options, disabled, customClass, handler
    } = this.props
    return disabled ? null : (
      <fieldset disabled={disabled} className={customClass}>
        <legend>{name}</legend>
        <select name={name}
          id={name}
          onChange={e => {
            e.persist()
            const val = e.target.value
            handler({[name]: val})
          }}
        >
          <option value="">{placeholder}</option>
          {options.map(opt => <option value={opt}>{opt}</option>)}
        </select>
        <label htmlFor={name}>{label}</label>
      </fieldset>
    )
  }
}

export default SelectFieldSet
