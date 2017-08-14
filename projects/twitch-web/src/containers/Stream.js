import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {streamActions, streamSelectors} from 'twitch-data'
import StreamPlayer from 'twitch-ui/src/components/StreamPlayer'

const mapStateToProps = (state, props) => ({
  type: 'frame',
  stream: streamSelectors.getStream(state, {id: props.match.params.id})
})

const mapDispatchToProps = (dispatch, props) => ({
  loadPlaylistUrl: () => {
    dispatch(streamActions.loadPlaylistUrlForStream({
      id: props.match.params.id
    }))
  },
  loadPlaylist: (url) => {
    dispatch(streamActions.loadPlaylistForStream({
      id: props.match.params.id,
      url
    }))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StreamPlayer))
