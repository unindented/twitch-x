import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import GridCell from './GridCell'

describe('GridCell', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(
      <GridCell
        href='/games/488552'
        image='//lorempixel.com/{width}/{height}/'
        name='Overwatch'
        viewers={41343}
        width={272}
        height={380}
      />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
