import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import NavigationLogo from './NavigationLogo'

describe('NavigationLogo', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<NavigationLogo />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
