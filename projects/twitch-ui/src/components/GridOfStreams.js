import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'
import GridSpinner from './GridSpinner'

export default class GridOfStreams extends PureComponent {
  componentDidMount () {
    const {loadStreams} = this.props
    loadStreams()
  }

  render () {
    const {columns, streams} = this.props

    const content = streams == null || streams.length === 0
      ? <GridSpinner />
      : (
        <Grid
          columns={columns}
        >
          {streams.map(this.renderStream)}
        </Grid>
      )

    return (
      <div>
        <Title>
          Top streams
        </Title>
        {content}
      </div>
    )
  }

  renderStream (stream) {
    const {id, image, channel, game, viewers} = stream

    return (
      <GridCell
        key={id}
        href={`#/streams/${id}`}
        image={image}
        name={`${channel} - ${game}`}
        viewers={viewers}
        width={640}
        height={360}
      />
    )
  }
}

GridOfStreams.propTypes = {
  columns: PropTypes.number.isRequired,
  streams: PropTypes.arrayOf(PropTypes.object),
  loadStreams: PropTypes.func
}
