import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App'

describe('App', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
