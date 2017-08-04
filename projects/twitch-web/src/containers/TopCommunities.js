import {connect} from 'react-redux'
import {communityActions, communitySelectors} from 'twitch-data'
import GridOfCommunities from 'twitch-ui/src/components/GridOfCommunities'

const mapStateToProps = (state) => ({
  communities: communitySelectors.getTopCommunities(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  loadCommunities: () => {
    dispatch(communityActions.loadTopCommunities({limit: props.limit}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GridOfCommunities)
