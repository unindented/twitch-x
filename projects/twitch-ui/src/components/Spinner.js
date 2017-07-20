import React from 'react'
import styled, {keyframes} from 'styled-components'
import {transparentize} from 'polished'

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const SpinnerRoot = styled.div`
  position: relative;
  animation: ${rotation} 1s infinite ease-in-out;
  border-color: ${props => transparentize(0.5, props.theme.colors.primary)};
  border-style: solid;
  border-top-color: ${props => props.theme.colors.primary};
  border-width: ${props => props.theme.layout.gaps.medium};
  text-indent: -9999px;
  transform: translateZ(0);

  &,
  &::after {
    width: ${props => props.theme.layout.widths.spinner};
    height: ${props => props.theme.layout.widths.spinner};
    border-radius: 50%;
  }
`

export default function Spinner () {
  return (
    <SpinnerRoot>
      Loading...
    </SpinnerRoot>
  )
}
