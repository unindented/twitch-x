import React from 'react'
import PropTypes from 'prop-types'
import TopStreamsForCommunity from '../containers/TopStreamsForCommunity'

export default function Community (props) {
  const {id} = props.match.params
  return (
    <TopStreamsForCommunity
      id={id}
      limit={20}
      columns={5}
    />
  )
}

Community.propTypes = {
  match: PropTypes.object.isRequired
}
