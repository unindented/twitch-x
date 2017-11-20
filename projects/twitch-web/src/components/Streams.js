import React from 'react'
import TopStreams from '../containers/TopStreams'

export default function Streams () {
  return (
    <TopStreams
      limit={25}
      columns={5}
    />
  )
}
