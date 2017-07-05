import React from 'react'
import styled from 'styled-components'
import NavigationLink from './NavigationLink'
import homeIcon from 'twitch-assets/build/web/icons/home.svg'
import streamsIcon from 'twitch-assets/build/web/icons/streams.svg'
import gamesIcon from 'twitch-assets/build/web/icons/games.svg'
import communitiesIcon from 'twitch-assets/build/web/icons/communities.svg'
import searchIcon from 'twitch-assets/build/web/icons/search.svg'

const NavigationLinksRoot = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`

export default function NavigationLinks () {
  return (
    <NavigationLinksRoot>
      <NavigationLink
        href='/'
        icon={homeIcon}
        iconAlt=''
        label='Home'
      />
      <NavigationLink
        href='/streams'
        icon={streamsIcon}
        iconAlt=''
        label='Streams'
      />
      <NavigationLink
        href='/games'
        icon={gamesIcon}
        iconAlt=''
        label='Games'
      />
      <NavigationLink
        href='/communities'
        icon={communitiesIcon}
        iconAlt=''
        label='Communities'
      />
      <NavigationLink
        href='/search'
        icon={searchIcon}
        iconAlt=''
        label='Search'
      />
    </NavigationLinksRoot>
  )
}
