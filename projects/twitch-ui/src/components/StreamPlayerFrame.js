import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StreamPlayerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.layout.gaps.medium};
`

const StreamPlayerFrame = styled.iframe`
  width: 80vw;
  max-width: calc(16 / 9 * 80vh);
  height: calc(9 / 16 * 80vw);
  max-height: 80vh;
  flex: 1;
  border: 0;
  background: ${props => props.theme.colors.quaternary};
`

export default class StreamPlayer extends PureComponent {
  render () {
    const {stream} = this.props

    if (stream == null) {
      return null
    }

    return (
      <StreamPlayerContainer>
        <StreamPlayerFrame
          src={`https://player.twitch.tv/?channel=${stream.id}`}
          allowFullScreen
        />
      </StreamPlayerContainer>
    )
  }
}

StreamPlayer.propTypes = {
  stream: PropTypes.object.isRequired
}
