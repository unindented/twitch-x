import React from 'react'
import PropTypes from 'prop-types'
import Root from 'twitch-ui/src/components/Root'
import Navigation from 'twitch-ui/src/components/Navigation'
import Main from 'twitch-ui/src/components/Main'

export default function App (props) {
  const {children} = props

  return (
    <Root>
      <Navigation />
      <Main>
        {children}
      </Main>
    </Root>
  )
}

App.propTypes = {
  children: PropTypes.node
}
