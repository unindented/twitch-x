import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import NavigationLinks from './NavigationLinks'

describe('NavigationLinks', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<NavigationLinks />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
