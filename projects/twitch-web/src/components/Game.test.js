import React from 'react'
import {render} from '../utils/renderer'
import Game from './Game'

describe('Game', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <Game
        match={{params: {id: 'Dota 2'}}}
      />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
