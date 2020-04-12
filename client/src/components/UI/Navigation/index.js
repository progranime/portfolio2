import React, { useState } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'

import './index.scss'

const initialState = {
  isNavOpen: false
}

const primaryURL = ['', '/']
const secondaryURL = [
  '/profile',
  '/portfolio',
  '/code',
  '/contact',
  '/experience'
]

const Navigation = props => {
  const [values, setValues] = useState(initialState)

  const toggleMenuHandler = () => {
    setValues({
      ...values,
      isNavOpen: !values.isNavOpen
    })
  }

  const navigationClass = () => {
    if (primaryURL.includes(props.location.pathname)) return ''
    else if (!secondaryURL.includes(props.location.pathname)) return ''

    return 'navigation--secondary'
  }

  return (
    <div className={`navigation ${navigationClass()}`}>
      <div className='navigation__container container'>
        <div className='navigation__logo'>
          <Link to='/'>
            <span>
              JERE<span>MY</span>
            </span>
          </Link>
        </div>
        <div
          className={`navigation__menu ${values.isNavOpen ? 'active' : ''}`}
          onClick={toggleMenuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navigation__list ${values.isNavOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to='/'
              exact
              activeClassName='active'
              onClick={toggleMenuHandler}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              exact
              activeClassName='active'
              onClick={toggleMenuHandler}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/portfolio'
              exact
              activeClassName='active'
              onClick={toggleMenuHandler}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/experience'
              exact
              activeClassName='active'
              onClick={toggleMenuHandler}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/code'
              exact
              activeClassName='active'
              onClick={toggleMenuHandler}
            >
              Code
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              exact
              activeClassName='active'
              onClick={toggleMenuHandler}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Navigation)
