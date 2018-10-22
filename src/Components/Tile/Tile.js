import React from 'react'

const Container = ({}) => {
  return (
    <div>
      
    </div>
  )
}

const Section = ({children, render, customClasses}) => {
  return (
    <section className="tile is-parent ${customClasses}">
      {children() || render()}
    </section>
  )
}

const Content = () => {
  return (
    <div>
      
    </div>
  )
}

const Tile = {Ancestor, Parent, Child}

export default Tile