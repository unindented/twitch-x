import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationItemIconRoot = styled.span`
  display: block;
  width: ${props => props.theme.layout.navCollapsedWidth};
  height: ${props => props.theme.layout.navCollapsedWidth};
  flex: 0 0 auto;
  padding: ${props => props.theme.layout.gap};
`

const NavigationItemIconImage = styled.img`
  display: block;
  width: 100%;
`

export default function NavigationItemIcon (props) {
  const {icon, iconAlt} = props

  return (
    <NavigationItemIconRoot>
      <NavigationItemIconImage
        src={icon}
        alt={iconAlt}
      />
    </NavigationItemIconRoot>
  )
}

NavigationItemIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired
}
