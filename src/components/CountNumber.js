import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCardItem, totalPrice } from '../store/RecycleSlice'

export const CountNumber = ({ props }) => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const { name, price } = props

  const addCard = (count) => {
    dispatch(setCardItem({ name, price, count }))
    dispatch(totalPrice())
  }
  return (
    <>
      <div className='btn-group'>
        <button className='button btn-left' onClick={() => setCount(count - 1)}>
          <svg width="12" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H14V2H0V0Z" fill="black" />
          </svg>
        </button>
        <span>{(count === 0 || count < 0) ? setCount(1): count }</span>
        <button className='button btn-right' onClick={() => setCount(count + 1)}>
          <svg width="10" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
          </svg>
        </button>
      </div>
      <button className='btn btn-primary mt-3 mb-2' onClick={() => addCard(count)}>Add to Card</button>
    </>
  )
}
