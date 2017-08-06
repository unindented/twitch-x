import {normalize, schema} from 'normalizr'
import {valueOrNull} from './utils'

const stream = new schema.Entity('streams', {}, {
  idAttribute: (stream) => stream.channel.name,
  processStrategy: (stream) => {
    return {
      id: valueOrNull(stream.channel.name),
      status: valueOrNull(stream.channel.status),
      channel: valueOrNull(stream.channel.display_name),
      game: valueOrNull(stream.game),
      image: valueOrNull(stream.preview.template),
      viewers: valueOrNull(stream.viewers)
    }
  }
})

const root = [stream]

export function normalizeTopStreams (payload) {
  return normalize(payload.streams, root)
}

export {normalizeTopStreams as normalizeSearchStreams}
