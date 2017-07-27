import React from 'react'
import {render} from '../utils/renderer'
import Streams from './Streams'

describe('Streams', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <Streams />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
