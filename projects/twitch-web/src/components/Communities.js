import React from 'react'
import TopCommunities from '../containers/TopCommunities'

export default function Communities () {
  return (
    <TopCommunities
      title='Top Communities'
      limit={20}
      columns={5}
    />
  )
}
