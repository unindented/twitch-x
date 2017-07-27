import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import GridCell from './GridCell'

const GridCellContainer = styled.div`
  display: flex;
  width: 240px;
`

storiesOf('GridCell', module)
  .add('without info', () => (
    <GridCellContainer>
      <GridCell
        href='/games/32399'
        image='//lorempixel.com/{width}/{height}/'
        name='Counter-Strike: Global Offensive'
        width={272}
        height={380}
      />
    </GridCellContainer>
  ))
  .add('with viewers', () => (
    <GridCellContainer>
      <GridCell
        href='/games/493057'
        image='//lorempixel.com/{width}/{height}/'
        name='Counter-Strike: Global Offensive'
        viewers={393419}
        width={272}
        height={380}
      />
    </GridCellContainer>
  ))
  .add('with channels', () => (
    <GridCellContainer>
      <GridCell
        href='/games/493057'
        image='//lorempixel.com/{width}/{height}/'
        name='Counter-Strike: Global Offensive'
        channels={758}
        width={272}
        height={380}
      />
    </GridCellContainer>
  ))
  .add('with viewers and channels', () => (
    <GridCellContainer>
      <GridCell
        href='/games/493057'
        image='//lorempixel.com/{width}/{height}/'
        name='Counter-Strike: Global Offensive'
        viewers={393419}
        channels={758}
        width={272}
        height={380}
      />
    </GridCellContainer>
  ))
