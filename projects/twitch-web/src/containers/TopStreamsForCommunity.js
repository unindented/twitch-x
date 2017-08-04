import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {streamActions, streamSelectors} from 'twitch-data'
import GridOfStreams from 'twitch-ui/src/components/GridOfStreams'

const mapStateToProps = (state, props) => ({
  streams: streamSelectors.getTopStreamsForCommunity(state, {id: props.match.params.id})
})

const mapDispatchToProps = (dispatch, props) => ({
  loadStreams: () => {
    dispatch(streamActions.loadTopStreamsForCommunity({
      id: props.match.params.id,
      limit: props.limit
    }))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GridOfStreams))
