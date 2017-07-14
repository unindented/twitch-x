import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationItemIconRoot = styled.span`
  display: block;
  width: ${props => props.theme.layout.widths.navCollapsed};
  height: ${props => props.theme.layout.widths.navCollapsed};
  flex: 0 0 auto;
  padding: ${props => props.theme.layout.gaps.medium};
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
