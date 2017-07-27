import React from 'react'
import {storiesOf} from '@storybook/react'
import Grid from './Grid'
import GridCell from './GridCell'

storiesOf('Grid', module)
  .add('default', () => (
    <Grid
      columns={4}
    >
      <GridCell
        href='/games/32399'
        image='//lorempixel.com/{width}/{height}/'
        name='Counter-Strike: Global Offensive'
        viewers={393419}
        channels={758}
        width={272}
        height={380}
      />
      <GridCell
        href='/games/21779'
        image='//lorempixel.com/{width}/{height}/'
        name='League of Legends'
        viewers={121668}
        channels={1818}
        width={272}
        height={380}
      />
      <GridCell
        href='/games/493057'
        image='//lorempixel.com/{width}/{height}/'
        name='PLAYERUNKNOWN&apos;S BATTLEGROUNDS'
        viewers={76787}
        channels={1943}
        width={272}
        height={380}
        focused
      />
      <GridCell
        href='/games/138585'
        image='//lorempixel.com/{width}/{height}/'
        name='Hearthstone'
        viewers={38773}
        channels={280}
        width={272}
        height={380}
      />
      <GridCell
        href='/games/32399'
        image='//lorempixel.com/{width}/{height}/'
        name='Counter-Strike: Global Offensive'
        viewers={393419}
        channels={758}
        width={272}
        height={380}
      />
      <GridCell
        href='/games/21779'
        image='//lorempixel.com/{width}/{height}/'
        name='League of Legends'
        viewers={121668}
        channels={1818}
        width={272}
        height={380}
      />
      <GridCell
        href='/games/493057'
        image='//lorempixel.com/{width}/{height}/'
        name='PLAYERUNKNOWN&apos;S BATTLEGROUNDS'
        viewers={76787}
        channels={1943}
        width={272}
        height={380}
        focused
      />
      <GridCell
        href='/games/138585'
        image='//lorempixel.com/{width}/{height}/'
        name='Hearthstone'
        viewers={38773}
        channels={280}
        width={272}
        height={380}
      />
    </Grid>
  ))
