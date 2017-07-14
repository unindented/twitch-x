import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import GridCell from './GridCell'

const GridCellContainer = styled.div`
  display: flex;
  width: 240px;
`

storiesOf('GridCell', module)
  .add('default', () => (
    <GridCellContainer>
      <GridCell
        href='/games/493057'
        image='//lorempixel.com/{width}/{height}/'
        name='PLAYERUNKNOWN&apos;S BATTLEGROUNDS'
        viewers={120844}
        width={272}
        height={380}
      />
    </GridCellContainer>
  ))
