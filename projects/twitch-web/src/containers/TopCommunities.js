import {connect} from 'react-redux'
import {communityActions, communitySelectors} from 'twitch-data'
import TopCommunities from 'twitch-ui/src/components/TopCommunities'

const mapStateToProps = (state) => ({
  communities: communitySelectors.getTopCommunities(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  loadTopCommunities: () => {
    dispatch(communityActions.loadTopCommunities({limit: props.limit}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopCommunities)
