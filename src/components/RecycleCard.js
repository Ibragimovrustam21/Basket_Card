import React from 'react'
import { useSelector } from 'react-redux'
import { RecycleCardItem } from './RecycleCardItem'

export const RecycleCard = () => {
  const State = useSelector(state => state.rec)

  return (
    <div className='recycle-card card'>
      <div className='card-body'>
        <div className='text-center'>
          <h3>Basket Card</h3>
          <h4>Total</h4>
          <h1 className='text-success'>${State.total}</h1>
        </div>
        <RecycleCardItem />
      </div>
    </div>
  )
}
