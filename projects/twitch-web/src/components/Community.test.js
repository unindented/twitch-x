import React from 'react'
import {render} from '../utils/renderer'
import Community from './Community'

describe('Community', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <Community
        match={{params: {id: '6e940c4a-c42f-47d2-af83-0a2c7e47c421'}}}
      />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
