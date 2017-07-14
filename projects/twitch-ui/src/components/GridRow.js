import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GridRowRoot = styled.div`
  display: flex;
`

export default function GridRow (props) {
  const {children} = props

  return (
    <GridRowRoot>
      {children}
    </GridRowRoot>
  )
}

GridRow.propTypes = {
  children: PropTypes.node
}
