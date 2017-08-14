import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import StreamPlayerHls from './StreamPlayerHls'

const stream = {
  id: 'playoverwatch'
}

const streamWithPlaylist = {
  ...stream,
  playlist: 'https://video-dev.github.io/streams/x36xhzz.m3u8'
}

const streamWithFeeds = {
  ...streamWithPlaylist,
  feeds: [{
    name: '720p',
    url: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
  }]
}

storiesOf('StreamPlayerHls', module)
  .add('without playlist or feeds', () => (
    <StreamPlayerHls
      stream={stream}
      loadPlaylistUrl={action('load playlist URL')}
      loadPlaylist={action('load playlist')}
    />
  ))
  .add('with playlist', () => (
    <StreamPlayerHls
      stream={streamWithPlaylist}
      loadPlaylistUrl={action('load playlist URL')}
      loadPlaylist={action('load playlist')}
    />
  ))
  .add('with feeds', () => (
    <StreamPlayerHls
      stream={streamWithFeeds}
      loadPlaylistUrl={action('load playlist URL')}
      loadPlaylist={action('load playlist')}
    />
  ))
