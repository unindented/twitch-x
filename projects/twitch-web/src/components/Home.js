import React, {PureComponent} from 'react'
import TopStreams from '../containers/TopStreams'
import TopGames from '../containers/TopGames'

export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <TopStreams
          limit={5}
          columns={5}
        />
        <TopGames
          limit={10}
          columns={5}
        />
      </div>
    )
  }
}
