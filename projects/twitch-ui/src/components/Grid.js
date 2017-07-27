import React from 'react'
import PropTypes from 'prop-types'
import GridRow from './GridRow'

function splitInRows (arr, columns) {
  return arr.reduce((memo, child, i) => {
    if (i % columns === 0) {
      memo.push([])
    }
    memo[memo.length - 1].push(child)
    return memo
  }, [])
}

export default function Grid (props) {
  const {columns, children} = props
  const rows = splitInRows(children, columns)

  return (
    <div>
      {rows.map((row) => (
        <GridRow
          key={row.map(row => row.key).join(',')}
        >
          {row}
        </GridRow>
      ))}
    </div>
  )
}

Grid.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node
}
