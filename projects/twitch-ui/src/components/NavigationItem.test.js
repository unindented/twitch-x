import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import NavigationItem from './NavigationItem'

describe('NavigationItem', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<NavigationItem
      icon='home'
      iconAlt=''
      label='Home'
    />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
