import React from 'react'

function Price(props) {
  return (
    <div className="book__price">
    {props.sale
      ? <><span className="book__price--normal">${props.original.toFixed(2)}</span> ${props.sale.toFixed(2)}</>
      : <>${props.original.toFixed(2)}</>
    }
  </div>
  )
}

export default Price