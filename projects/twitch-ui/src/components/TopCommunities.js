import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'

export default class TopCommunities extends PureComponent {
  componentDidMount () {
    const {loadTopCommunities} = this.props
    loadTopCommunities()
  }

  render () {
    const {columns, communities} = this.props

    if (communities == null) {
      return null
    }

    return (
      <div>
        <Title>
          Top Communities
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

TopCommunities.propTypes = {
  columns: PropTypes.number.isRequired,
  communities: PropTypes.arrayOf(PropTypes.object),
  loadTopCommunities: PropTypes.func
}
