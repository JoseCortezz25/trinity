import React from 'react'
import './Table.css'

const Table = ({ headers = [], children }) => {
  return (
    <div className="TableComponent">
      <ul
        className="TableComponent__header"
        style={{ gridTemplateColumns: `repeat(${headers.length}, 250px)` }}
      >
        {headers.map((header) => (
          <li key={header}>{header}</li>
        ))}
      </ul>
      <ul className="TableComponent__item">
          {children}
      </ul>
    </div>
  )
}

export default Table
