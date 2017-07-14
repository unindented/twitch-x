import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import GridRow from './GridRow'

describe('GridRow', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(
      <GridRow>
        foo
      </GridRow>
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
