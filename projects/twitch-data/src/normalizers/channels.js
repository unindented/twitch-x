import {normalize, schema} from 'normalizr'
import {valueOrNull} from './utils'

const channel = new schema.Entity('channels', {}, {
  idAttribute: 'name',
  processStrategy: (channel) => {
    return {
      id: valueOrNull(channel.name),
      status: valueOrNull(channel.status),
      name: valueOrNull(channel.display_name),
      game: valueOrNull(channel.game),
      image: valueOrNull(channel.logo)
    }
  }
})

const root = [channel]

export function normalizeSearchChannels (payload) {
  return normalize(payload.channels, root)
}
