import React from 'react'
import PropTypes from 'prop-types'

export default function Stream (props) {
  return (
    <h2>
      {props.match.params.id}
    </h2>
  )
}

Stream.propTypes = {
  match: PropTypes.object.isRequired
}
