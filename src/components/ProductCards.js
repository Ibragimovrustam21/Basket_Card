import React from 'react'
import { useSelector } from 'react-redux'
import { CountNumber } from './CountNumber'

export const ProductCards = () => {
  const State = useSelector(state => state.rec)

  let zb = State.products.filter(item => item.category === State.fltr)
  if (State.fltr === 'all') {
    zb = State.products
  }
  return (
    <>
      {
        zb.map(item => {
          return (
            <div className='product-card card mb-3' key={item.name} >
              <div className='card-body'>
                <h2>{item.name}</h2>
                <h4>${item.price}</h4>
                <img className='card-img mb-3' src={item.img} alt='' />
                <CountNumber props={item} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}
