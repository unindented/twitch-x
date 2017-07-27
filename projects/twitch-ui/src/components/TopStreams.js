import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'

export default class TopStreams extends PureComponent {
  componentDidMount () {
    const {loadTopStreams} = this.props
    loadTopStreams()
  }

  render () {
    const {columns, streams} = this.props

    if (streams == null) {
      return null
    }

    return (
      <div>
        <Title>
          Top Streams
        </Title>
        <Grid
          columns={columns}
        >
          {streams.map(this.renderStream)}
        </Grid>
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

TopStreams.propTypes = {
  columns: PropTypes.number.isRequired,
  streams: PropTypes.arrayOf(PropTypes.object),
  loadTopStreams: PropTypes.func
}
