import React, {Component} from 'react'
import FeatureTitle from '../../Components/FeatureTitle'
import {INGREDIENTS, GLASS_TYPES} from '../../_helpers/_data/index'
import SelectFieldSet from '../../Components/SelectFieldSet/SelectFieldSet'
import {InputGroup, Switch, TextArea, Alignment} from '@blueprintjs/core'

const FORM_DEFAULT_VALUES = {
  name: '',
  alcoholic: true,
  glass: 'cocktail glass',
  ingredients: {},
  howTo: 'mix stuff like...',
}
const FORM_PROMPTS_BY_KEY = {
  name: 'Name Your Drink',
  alcoholic: 'Is It Alcoholic?',
  glass: 'What Type of Glass?',
  ingredients: 'List the Ingredients',
  howTo: 'Mixing Instructions',
}

class TabAdd extends Component {

  state = {
    name: null,
    alcoholic: true,
    glass: null,
    ingredients: null,
    howTo: null,
  }
  
  updateValue = (st) => {
    this.setState(st)
  }

  render() {
    const { name, alcoholic, glass, ingredients, howTo } = this.state
    return (
      <div className='add-recipe'>
        <FeatureTitle title={'Add Recipe'} />
        <form onSubmit={e => e.preventDefault()} className='add-recipe-form'>
          <Switch
            large={true}
            label={`${FORM_PROMPTS_BY_KEY['alcoholic']}`}
            checked={alcoholic}
            onChange={e => {
              this.setState(prevSt => ({
                alcoholic: !prevSt.alcoholic
              }))
            }}
            alignIndicator={Alignment.RIGHT}
          />
          <InputGroup 
            large={true}
            leftIcon={'glass'}
            placeholder={`${FORM_PROMPTS_BY_KEY['name']}`} 
            value={name}
            type='text'
            onChange={e => this.updateValue({name: e.target.value})}
          />
          <SelectFieldSet
            name={'glass'}
            label={'glass type'}
            placeholder={`${FORM_PROMPTS_BY_KEY['glass']}`}
            options={GLASS_TYPES}
            className={'fieldset glass'}
            value={glass}
            handler={e => {
              this.updateValue({glass: e.target.value})
            }}
          />
          <SelectFieldSet
            name={'ingredients'}
            label={'ingredients'}
            placeholder={`${FORM_PROMPTS_BY_KEY['ingredients']}`}
            options={Object.entries(INGREDIENTS).reduce((acc, curr) => {
              return [...acc, curr[0], ...curr[1]]
            }, [])}
            handler={e => {
              this.updateValue({ingredients: e.target.value})
            }}
            className={'fieldset ingredients'}
          />
          <TextArea
            large={true}
            onChange={e => this.updateValue({howTo: e.target.value})}
            value={howTo}
          />
          
        </form>
      </div>
    )
  }
}

export default TabAdd