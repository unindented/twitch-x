import {normalize, schema} from 'normalizr'
import {valueOrNull} from './utils'

const processGame = (game) => {
  return {
    id: valueOrNull(game._id),
    name: valueOrNull(game.name),
    image: valueOrNull(game.box.template)
  }
}

const topGame = new schema.Entity('games', {}, {
  idAttribute: (value) => value.game._id,
  processStrategy: ({game, viewers, channels}) => {
    return {
      ...processGame(game),
      viewers: valueOrNull(viewers),
      channels: valueOrNull(channels)
    }
  }
})

const searchGame = new schema.Entity('games', {}, {
  idAttribute: '_id',
  processStrategy: processGame
})

const rootTop = [topGame]
const rootSearch = [searchGame]

export function normalizeTopGames (payload) {
  return normalize(payload.top, rootTop)
}

export function normalizeSearchGames (payload) {
  return normalize(payload.games, rootSearch)
}
