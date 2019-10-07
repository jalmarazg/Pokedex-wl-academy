import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  width: 100%;
`

export const NavigationStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  float: left;
  padding: 0;
  list-style: none
`

export const NavigationOption = styled.li`
  cursor: pointer;
  font-size: 20px;
  margin: 0 16px;
  color: darkcyan;
  float: left;
`
