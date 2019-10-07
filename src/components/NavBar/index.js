import React from 'react'
import { Link } from 'react-router-dom'

import { HOME, CONTACT } from '../../Routes'
import { NavBarWrapper, NavigationOption, NavigationStyle } from './NavBar.styled'

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavigationStyle>
        <Link to={HOME}><NavigationOption>Home</NavigationOption></Link> |
        <Link to={CONTACT}><NavigationOption>Acerca de nosotros</NavigationOption></Link>
      </NavigationStyle>
    </NavBarWrapper>
  )
}

export default NavBar
