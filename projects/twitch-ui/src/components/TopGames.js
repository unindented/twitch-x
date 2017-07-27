import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'

export default class TopGames extends PureComponent {
  componentDidMount () {
    const {loadTopGames} = this.props
    loadTopGames()
  }

  render () {
    const {columns, games} = this.props

    if (games == null) {
      return null
    }

    return (
      <div>
        <Title>
          Top Games
        </Title>
        <Grid
          columns={columns}
        >
          {games.map(this.renderGame)}
        </Grid>
      </div>
    )
  }

  renderGame (game) {
    const {id, image, name, viewers, channels} = game

    return (
      <GridCell
        key={id}
        href={`#/games/${id}`}
        image={image}
        name={name}
        viewers={viewers}
        channels={channels}
        width={272}
        height={380}
      />
    )
  }
}

TopGames.propTypes = {
  columns: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.object),
  loadTopGames: PropTypes.func
}
