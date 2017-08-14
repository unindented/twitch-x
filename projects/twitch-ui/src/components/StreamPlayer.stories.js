import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import StreamPlayer from './StreamPlayer'

const stream = {
  id: 'day9tv',
  status: 'StarCraft: Remastered Launch Event'
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

storiesOf('StreamPlayer', module)
  .add('with frame', () => (
    <StreamPlayer
      type='frame'
      stream={stream}
      loadPlaylistUrl={action('load playlist URL')}
      loadPlaylist={action('load playlist')}
    />
  ))
  .add('with HLS', () => (
    <StreamPlayer
      type='hls'
      stream={streamWithFeeds}
      loadPlaylistUrl={action('load playlist URL')}
      loadPlaylist={action('load playlist')}
    />
  ))
