import React from 'react'
import {render} from '../utils/renderer'
import ScrollToTop from './ScrollToTop'

describe('ScrollToTop', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <ScrollToTop>
        foo
      </ScrollToTop>
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
