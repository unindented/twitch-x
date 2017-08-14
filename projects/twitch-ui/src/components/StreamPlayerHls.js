import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from './Spinner'

const StreamPlayerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.layout.gaps.medium};
`

const StreamPlayerVideo = styled.video`
  width: 80vw;
  max-width: calc(16 / 9 * 80vh);
  height: calc(9 / 16 * 80vw);
  max-height: 80vh;
  flex: 1;
  background: ${props => props.theme.colors.quaternary};
`

export default class StreamPlayer extends PureComponent {
  componentDidMount () {
    this.loadStream()
  }

  componentDidUpdate () {
    this.loadStream()
  }

  componentWillUnmount () {
    if (this.hls) {
      this.hls.destroy()
    }
  }

  render () {
    const {stream} = this.props

    if (stream == null) {
      return null
    }

    const {playlist, feeds} = stream

    return (
      <StreamPlayerContainer>
        {playlist == null || feeds == null
          ? <Spinner />
          : (
            <StreamPlayerVideo
              controls
              innerRef={(video) => { this.video = video }}
            />
          )
        }
      </StreamPlayerContainer>
    )
  }

  loadStream () {
    const {stream, loadPlaylistUrl, loadPlaylist} = this.props

    if (stream == null) {
      return
    }

    if (stream.playlist == null) {
      loadPlaylistUrl()
      return
    }

    if (stream.feeds == null) {
      loadPlaylist(stream.playlist)
      return
    }

    if (this.hls) {
      this.hls.destroy()
    }

    import(/* webpackChunkName: "hls" */ 'hls.js/dist/hls.light.js')
      .then((Hls) => {
        this.hls = new Hls()
        this.hls.loadSource(stream.feeds[0].url)
        this.hls.attachMedia(this.video)
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          this.video.play()
        })
      })
  }
}

StreamPlayer.propTypes = {
  stream: PropTypes.object.isRequired,
  loadPlaylistUrl: PropTypes.func.isRequired,
  loadPlaylist: PropTypes.func.isRequired
}
