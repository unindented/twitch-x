import React from 'react'
import TopGames from '../containers/TopGames'

export default function Games () {
  return (
    <TopGames
      title='Top Games'
      limit={20}
      columns={5}
    />
  )
}
