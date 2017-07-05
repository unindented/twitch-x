import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import themes from '../themes'
import Root from './Root'

describe('Root', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<Root
      theme={themes.default}
    />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
