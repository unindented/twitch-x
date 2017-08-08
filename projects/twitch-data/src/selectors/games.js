import {createSelector} from 'reselect'

export const getTopGames = createSelector(
  (state) => state.data.games.top,
  (state) => state.data.games.byId,
  (topGameIds, gamesById) => topGameIds.map((id) => gamesById[id])
)

export const getSearchGames = createSelector(
  (state) => state.data.games.search,
  (state) => state.data.games.byId,
  (searchGameIds, gamesById) => searchGameIds.map((id) => gamesById[id])
)

export const getGame = createSelector(
  (state, props) => state.data.games.byId[props.id],
  (game) => game
)
