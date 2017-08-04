import React from 'react'
import TopStreams from '../containers/TopStreams'

export default function Streams () {
  return (
    <TopStreams
      title='Top Streams'
      limit={25}
      columns={5}
    />
  )
}
