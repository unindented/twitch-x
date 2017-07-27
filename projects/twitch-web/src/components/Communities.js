import React from 'react'
import TopCommunities from '../containers/TopCommunities'

export default function Communities () {
  return (
    <TopCommunities
      limit={20}
      columns={5}
    />
  )
}
