import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import ImageWithPlaceholder from './ImageWithPlaceholder'

describe('ImageWithPlaceholder', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(
      <ImageWithPlaceholder
        alt='Some image'
        src='//lorempixel.com/{width}/{height}/'
        width={272}
        height={380}
      />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
