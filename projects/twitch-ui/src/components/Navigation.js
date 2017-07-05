import React from 'react'
import styled from 'styled-components'
import NavigationLogo from './NavigationLogo'
import NavigationLinks from './NavigationLinks'

const NavigationRoot = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  width: ${props => props.theme.layout.navCollapsedWidth};
  flex-direction: column;
  background-color: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.white};
  transition: width 0.2s ease-in-out;

  &:hover {
    width: ${props => props.theme.layout.navExpandedWidth};
  }

  *[dir='rtl'] & {
    right: 0;
    left: auto;
  }
`

export default function Navigation () {
  return (
    <NavigationRoot>
      <NavigationLogo />
      <NavigationLinks />
    </NavigationRoot>
  )
}
