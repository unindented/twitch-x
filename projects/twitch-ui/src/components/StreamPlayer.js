import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import StreamPlayerFrame from './StreamPlayerFrame'
import StreamPlayerHls from './StreamPlayerHls'

export default class StreamPlayer extends PureComponent {
  render () {
    const {stream} = this.props

    if (stream == null) {
      return null
    }

    return (
      <div>
        <Title>
          {stream.status}
        </Title>
        {this.renderPlayer()}
      </div>
    )
  }

  renderPlayer () {
    const {type} = this.props

    switch (type) {
      case 'hls':
        return (
          <StreamPlayerHls
            {...this.props}
          />
        )
      default:
        return (
          <StreamPlayerFrame
            {...this.props}
          />
        )
    }
  }
}

StreamPlayer.propTypes = {
  type: PropTypes.string.isRequired,
  stream: PropTypes.object,
  loadPlaylistUrl: PropTypes.func.isRequired,
  loadPlaylist: PropTypes.func.isRequired
}
