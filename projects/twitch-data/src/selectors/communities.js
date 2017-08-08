import {createSelector} from 'reselect'

export const getTopCommunities = createSelector(
  (state) => state.data.communities.top,
  (state) => state.data.communities.byId,
  (topCommunityIds, communitiesById) => topCommunityIds.map((id) => communitiesById[id])
)

export const getCommunity = createSelector(
  (state, props) => state.data.communities.byId[props.id],
  (community) => community
)
