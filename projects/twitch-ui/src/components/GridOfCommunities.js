import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'
import GridSpinner from './GridSpinner'

export default class GridOfCommunities extends PureComponent {
  componentDidMount () {
    const {loadCommunities} = this.props
    loadCommunities()
  }

  render () {
    const {columns, communities} = this.props

    const content = communities == null || communities.length === 0
      ? <GridSpinner />
      : (
        <Grid
          columns={columns}
        >
          {communities.map(this.renderGame)}
        </Grid>
      )

    return (
      <div>
        <Title>
          Top communities
        </Title>
        {content}
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
  columns: PropTypes.number.isRequired,
  communities: PropTypes.arrayOf(PropTypes.object),
  loadCommunities: PropTypes.func
}
