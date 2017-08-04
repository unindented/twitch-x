import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'

export default class GridOfGames extends PureComponent {
  componentDidMount () {
    const {loadGames} = this.props
    loadGames()
  }

  render () {
    const {title, columns, games} = this.props

    if (games == null) {
      return null
    }

    return (
      <div>
        <Title>
          {title}
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

GridOfGames.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.object),
  loadGames: PropTypes.func
}
