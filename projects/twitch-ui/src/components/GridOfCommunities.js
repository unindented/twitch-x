import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'

export default class GridOfCommunities extends PureComponent {
  componentDidMount () {
    const {loadCommunities} = this.props
    loadCommunities()
  }

  render () {
    const {title, columns, communities} = this.props

    if (communities == null) {
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
          {communities.map(this.renderGame)}
        </Grid>
      </div>
    )
  }

  renderGame (community) {
    const {id, image, name, viewers, channels} = community

    return (
      <GridCell
        key={id}
        href={`#/communities/${id}`}
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

GridOfCommunities.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
  communities: PropTypes.arrayOf(PropTypes.object),
  loadCommunities: PropTypes.func
}
