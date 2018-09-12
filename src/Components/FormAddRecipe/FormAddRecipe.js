import React from 'react'
import {withFormik} from 'formik'
import Yup from 'yup'

class FormAddRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validated: false,
      recipeObject: {},
      values: {...FORM_DEFAULT_VALUES}
    }
  }
  
  static propTypes = {}
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        {children}
      </form>
    )
  }
}

export default FormAddRecipe
