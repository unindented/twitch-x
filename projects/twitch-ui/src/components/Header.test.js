import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Header from './Header'

describe('Header', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<Header />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
