import {normalize, schema} from 'normalizr'
import {valueOrNull} from './utils'

const community = new schema.Entity('communities', {}, {
  idAttribute: '_id',
  processStrategy: (community) => {
    return {
      id: valueOrNull(community._id),
      name: valueOrNull(community.display_name),
      image: valueOrNull(community.avatar_image_url),
      viewers: valueOrNull(community.viewers),
      channels: valueOrNull(community.channels)
    }
  }
})

const root = [community]

export function normalizeTopCommunities (payload) {
  return normalize(payload.communities, root)
}
