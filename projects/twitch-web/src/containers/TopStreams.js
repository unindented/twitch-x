import {connect} from 'react-redux'
import {streamActions, streamSelectors} from 'twitch-data'
import TopStreams from 'twitch-ui/src/components/TopStreams'

const mapStateToProps = (state) => ({
  streams: streamSelectors.getTopStreams(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  loadTopStreams: () => {
    dispatch(streamActions.loadTopStreams({limit: props.limit}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopStreams)
