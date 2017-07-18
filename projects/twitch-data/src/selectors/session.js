import {createSelector} from 'reselect'

export const getToken = createSelector(
  (state) => state.data.session.token,
  (token) => token
)
