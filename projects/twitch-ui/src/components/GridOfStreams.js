import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Grid from './Grid'
import GridCell from './GridCell'

export default class GridOfStreams extends PureComponent {
  componentDidMount () {
    const {loadStreams} = this.props
    loadStreams()
  }

  render () {
    const {title, columns, streams} = this.props

    if (streams == null) {
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

GridOfStreams.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
  streams: PropTypes.arrayOf(PropTypes.object),
  loadStreams: PropTypes.func
}
