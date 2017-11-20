import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'

const GridSpinnerRoot = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.layout.gaps.big};
`

export default function GridSpinner () {
  return (
    <GridSpinnerRoot>
      <Spinner />
    </GridSpinnerRoot>
  )
}
