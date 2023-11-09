import React from 'react'
import './QuantityInput.css'

export default function QuantityInput({ increaseHandler, decreaseHandler, quantity, increaseDisabled, decreaseDisabled }) {
  return (
    <div className="quantity-input-container">
      <input onChange={() => {}} className="quantity-input" type="number" value={ quantity }/>
      <button
        disabled={ decreaseDisabled && decreaseDisabled }
        className="quantity-button decrement"
        onClick={ decreaseHandler }>
          -
        </button>
      <button
        disabled={ increaseDisabled }
        className="quantity-button increment"
        onClick={ increaseHandler }>
          +
        </button>
    </div>
  )
}
