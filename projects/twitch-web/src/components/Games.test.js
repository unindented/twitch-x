import React from 'react'
import {render} from '../utils/renderer'
import Games from './Games'

describe('Games', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <Games />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
