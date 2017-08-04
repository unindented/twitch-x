import {connect} from 'react-redux'
import {streamActions, streamSelectors} from 'twitch-data'
import GridOfStreams from 'twitch-ui/src/components/GridOfStreams'

const mapStateToProps = (state) => ({
  streams: streamSelectors.getTopStreams(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  loadStreams: () => {
    dispatch(streamActions.loadTopStreams({limit: props.limit}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GridOfStreams)
