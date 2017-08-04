import {createSelector} from 'reselect'

export const getTopStreams = createSelector(
  (state) => state.data.streams.top,
  (state) => state.data.streams.byId,
  (topStreamIds, streamsById) => topStreamIds.map((id) => streamsById[id])
)

export const getTopStreamsForGame = createSelector(
  (state, props) => {
    const game = state.data.games.byId[props.id]
    return (game && game.topStreams) || []
  },
  (state) => state.data.streams.byId,
  (gameStreamIds, streamsById) => gameStreamIds.map((id) => streamsById[id])
)

export const getTopStreamsForCommunity = createSelector(
  (state, props) => {
    const community = state.data.communities.byId[props.id]
    return (community && community.topStreams) || []
  },
  (state) => state.data.streams.byId,
  (communityStreamIds, streamsById) => communityStreamIds.map((id) => streamsById[id])
)

export const getSearchStreams = createSelector(
  (state) => state.data.streams.search,
  (state) => state.data.streams.byId,
  (searchStreamIds, streamsById) => searchStreamIds.map((id) => streamsById[id])
)
