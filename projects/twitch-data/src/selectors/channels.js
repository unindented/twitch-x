import {createSelector} from 'reselect'

export const getSearchChannels = createSelector(
  (state) => state.data.channels.search,
  (state) => state.data.channels.byId,
  (searchChannelIds, channelsById) => searchChannelIds.map((id) => channelsById[id])
)

export const getChannel = createSelector(
  (state, props) => state.data.channels.byId[props.id],
  (channel) => channel
)
