import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import Navigation from './Navigation'

describe('Navigation', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<Navigation />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
