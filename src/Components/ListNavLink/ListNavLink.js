import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'


const ListNavLink = ({listName, baseUrl, routeState, onClick}) => {
  const suffix = listName.trim().toLowerCase().split(' ')[0]
  // const flag = suffix[0]
  return (
    <li className={`variable-list-nav-link ${suffix}`}>
      <NavLink onClick={onClick}
        to={{
          pathname: `${baseUrl}/tags-by-${suffix}`,
          state: {...routeState}
        }}>
        <p className={`variable-list-nav-link-text ${suffix}`}>
          {`${listName}`}
        </p>
      </NavLink>
    </li>
  )
}

export default ListNavLink