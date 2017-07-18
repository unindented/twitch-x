import {getAction} from '../api'

export function loadTopStreams ({limit}) {
  const action = {
    type: 'LOAD_TOP_STREAMS'
  }
  return getAction(action, '/streams', {query: {limit}})
}
