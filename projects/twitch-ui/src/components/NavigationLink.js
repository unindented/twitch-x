import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'

const NavigationLinkRoot = styled.li`
  display: block;
`

const NavigationLinkReal = styled.a`
  display: block;
  color: ${props => props.theme.colors.white};
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
  }
`

export default function NavigationLink (props) {
  const {href, icon, iconAlt, label} = props

  return (
    <NavigationLinkRoot>
      <NavigationLinkReal
        href={href}
      >
        <NavigationItem
          icon={icon}
          iconAlt={iconAlt}
          label={label}
        />
      </NavigationLinkReal>
    </NavigationLinkRoot>
  )
}

NavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
