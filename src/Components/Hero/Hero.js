import React from 'react'

const Hero = ({isFullHeight, children, customClasses, renderHead, renderBody, renderFoot}) => {
  return (
    <div class={`hero ${customClasses}`}>
      {isFullHeight ? (
        <React.Fragment>
          <section class="hero-head">{renderHead()}</section>
          <section class="hero-body">{renderBody()}</section>
          <section class="hero-foot">{renderFoot()}</section>
        </React.Fragment>
      ) : (
        <section class="hero-body">{children() || children}</section>
      )}
    </div>
  )
}

export default Hero
