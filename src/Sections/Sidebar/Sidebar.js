import React, { Component } from 'react'

class Sidebar extends Component {
  state = {

  }

  render() {
    const {user, sidebarVisible} = this.props
    return (
      <div className={`sidebar ${sidebarVisible ? 'on' : 'off'}`}>
        <ul className="sidebar-menu">
          <li className={`sidebar-menu-item log`}>
            <h2 className='sidebar-menu-item-text log'>
              {`${user ? 'Logout' : 'Login'}`}
            </h2>
          </li>
          <li className="sidebar-menu-item account">
            <h4 className='sidebar-menu-item-text'>{`Account`}</h4>
          </li>
          <li className="sidebar-menu-item support">
            <h4 className='sidebar-menu-item-text'>{`Support`}</h4>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar