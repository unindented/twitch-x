import React from 'react'
import {storiesOf} from '@storybook/react'
import StreamPlayerFrame from './StreamPlayerFrame'

const stream = {
  id: 'playoverwatch'
}

storiesOf('StreamPlayerFrame', module)
  .add('default', () => (
    <StreamPlayerFrame
      stream={stream}
    />
  ))
