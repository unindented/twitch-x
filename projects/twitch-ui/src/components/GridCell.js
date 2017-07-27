import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageWithPlaceholder from './ImageWithPlaceholder'
import {truncate} from '../utils/css'

const GridCellRoot = styled.a`
  display: block;
  overflow: hidden;
  flex: 1;
  padding: ${props => props.theme.layout.gaps.medium};
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

const GridCellFrame = styled.div`
  padding: ${props => props.theme.layout.borders.small};

  /* stylelint-disable-next-line */
  ${GridCellRoot}:hover & {
    border: ${props => props.theme.layout.borders.medium} solid;
    margin: -${props => props.theme.layout.borders.medium};
  }
`

const GridCellName = styled.h3`
  margin: ${props => props.theme.layout.gaps.small} 0 0;
  font-size: ${props => props.theme.font.sizes.secondary};
  font-weight: normal;
  ${truncate}
`

const GridCellInfo = styled.p`
  margin: 0;
  font-size: ${props => props.theme.font.sizes.tertiary};
  ${truncate}
`

export default function GridCell (props) {
  const {href, image, name, viewers, channels, width, height, focused} = props

  return (
    <GridCellRoot
      href={href}
    >
      <GridCellFrame
        focused={focused}
      >
        <ImageWithPlaceholder
          src={image}
          width={width}
          height={height}
        />
      </GridCellFrame>
      <GridCellName>
        {name}
      </GridCellName>
      {viewers && (
        <GridCellInfo>
          {viewers} viewers
        </GridCellInfo>
      )}
      {channels && (
        <GridCellInfo>
          {channels} channels
        </GridCellInfo>
      )}
    </GridCellRoot>
  )
}

GridCell.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  viewers: PropTypes.number,
  channels: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  focused: PropTypes.bool
}

GridCell.defaultProps = {
  focused: false
}
