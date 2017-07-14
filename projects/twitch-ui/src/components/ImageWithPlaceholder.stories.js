import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import ImageWithPlaceholder from './ImageWithPlaceholder'

const ImageContainer = styled.div`
  width: 240px;
`

storiesOf('ImageWithPlaceholder', module)
  .add('default', () => (
    <ImageContainer>
      <ImageWithPlaceholder
        alt='Some image'
        src='//lorempixel.com/{width}/{height}/'
        width={272}
        height={380}
      />
    </ImageContainer>
  ))
