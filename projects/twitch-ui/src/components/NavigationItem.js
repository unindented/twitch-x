import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavigationItemIcon from './NavigationItemIcon'

const NavigationItemRoot = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

const NavigationItemLabel = styled.span`
  flex: 1;
  margin: 0 ${props => props.theme.layout.gap};
`

export default function NavigationItem (props) {
  const {icon, iconAlt, label} = props

  return (
    <NavigationItemRoot>
      <NavigationItemIcon
        icon={icon}
        iconAlt={iconAlt}
      />
      {label && (
        <NavigationItemLabel>
          {label}
        </NavigationItemLabel>
      )}
    </NavigationItemRoot>
  )
}

NavigationItem.propTypes = {
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  label: PropTypes.string
}
