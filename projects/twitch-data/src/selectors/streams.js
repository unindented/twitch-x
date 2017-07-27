import {createSelector} from 'reselect'

export const getTopStreams = createSelector(
  (state) => state.data.streams.top,
  (state) => state.data.streams.byId,
  (topStreamIds, streamsById) => topStreamIds.map((id) => streamsById[id])
)

export const getSearchStreams = createSelector(
  (state) => state.data.streams.search,
  (state) => state.data.streams.byId,
  (searchStreamIds, streamsById) => searchStreamIds.map((id) => streamsById[id])
)
