import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import Root from './Root'

describe('Root', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<Root />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
