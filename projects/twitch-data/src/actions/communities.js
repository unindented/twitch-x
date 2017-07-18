import {getAction} from '../api'

export function loadTopCommunities ({limit}) {
  const action = {
    type: 'LOAD_TOP_COMMUNITIES'
  }
  return getAction(action, '/communities/top', {query: {limit}})
}
