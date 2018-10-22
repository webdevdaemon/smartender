import React from 'react'

const Umn = ({children, customClass}) =>
  <div class={`column ${customClass}`}>{children()}</div>

const Umns = ({children, customClass}) =>
  <div class={`columns ${customClass}`}>{children()}</div>

const Col = {Umn, Umns}

export default Col
