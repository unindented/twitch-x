import React from 'react'
import Root from 'twitch-ui/src/components/Root'
import Navigation from 'twitch-ui/src/components/Navigation'
import Main from 'twitch-ui/src/components/Main'
import GridRow from 'twitch-ui/src/components/GridRow'
import GridCell from 'twitch-ui/src/components/GridCell'

export default function App () {
  return (
    <Root>
      <Navigation />
      <Main>
        <GridRow>
          <GridCell
            href='/games/493057'
            image='//lorempixel.com/{width}/{height}/'
            name='PLAYERUNKNOWN&apos;S BATTLEGROUNDS'
            viewers={120844}
            width={272}
            height={380}
          />
          <GridCell
            href='/games/21779'
            image='//lorempixel.com/{width}/{height}/'
            name='League of Legends'
            viewers={100040}
            width={272}
            height={380}
          />
          <GridCell
            href='/games/488552'
            image='//lorempixel.com/{width}/{height}/'
            name='Overwatch'
            viewers={41343}
            width={272}
            height={380}
          />
          <GridCell
            href='/games/31621'
            image='//lorempixel.com/{width}/{height}/'
            name='Dungeons &amp; Dragons'
            viewers={27471}
            width={272}
            height={380}
          />
          <GridCell
            href='/games/138585'
            image='//lorempixel.com/{width}/{height}/'
            name='Hearthstone'
            viewers={25846}
            width={272}
            height={380}
          />
        </GridRow>
      </Main>
    </Root>
  )
}
