import React from 'react'
import PropTypes from 'prop-types'
import TopStreamsForGame from '../containers/TopStreamsForGame'

export default function Game (props) {
  const {id} = props.match.params
  return (
    <TopStreamsForGame
      id={id}
      limit={20}
      columns={5}
    />
  )
}

Game.propTypes = {
  match: PropTypes.object.isRequired
}
