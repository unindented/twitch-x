import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'
import GridSpinner from './GridSpinner'

export default class GridOfGames extends PureComponent {
  componentDidMount () {
    const {loadGames} = this.props
    loadGames()
  }

  render () {
    const {columns, games} = this.props

    const content = games == null || games.length === 0
      ? <GridSpinner />
      : (
        <Grid
          columns={columns}
        >
          {games.map(this.renderGame)}
        </Grid>
      )

    return (
      <div>
        <Title>
          Top games
        </Title>
        {content}
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

GridOfGames.propTypes = {
  columns: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.object),
  loadGames: PropTypes.func
}
