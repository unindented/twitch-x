import React from 'react'
import styled from 'styled-components'
import glitch from 'twitch-assets/build/web/icons/glitch.svg'
import NavigationItem from './NavigationItem'

const NavigationLogoRoot = styled.h1`
  margin: 0;
  background-color: ${props => props.theme.colors.secondary};
`

export default function NavigationLogo () {
  return (
    <NavigationLogoRoot>
      <NavigationItem
        icon={glitch}
        iconAlt='Twitch'
      />
    </NavigationLogoRoot>
  )
}
