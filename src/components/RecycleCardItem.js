import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../css/recycleCardItem.css'
import { deleted, totalPrice } from '../store/RecycleSlice'

export const RecycleCardItem = () => {
  const item = useSelector(state => state.rec.cardItem)
  const dispatch = useDispatch()
  const deleteItem = (id) => {
    dispatch(deleted(id))
    dispatch(totalPrice())
  }
  if (item.length === 0) return <h5 className='text-center'>Basket card is empty</h5>
  return (
    <>
      {item.map(r => {
        const { name, count, price, id } = r
        return (
          <div className='recycle-card-item mt-2' key={id}>
            <div>
              <h5>Name: <span className='fw-bold'>{name}</span></h5>
              <h6>Quality: <span className='fw-bold'>{count}</span></h6>
              <h6>Price: <span className='fw-bold'>${price}</span></h6>
            </div>
            <span className='trash-icon' onClick={() => deleteItem(id)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6ZM4 8V18H16V8H4ZM7 10H9V16H7V10ZM11 10H13V16H11V10ZM5 3V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V3H20V5H0V3H5ZM7 2V3H13V2H7Z" fill="black" />
              </svg>
            </span>
          </div>
        )
      })}
    </>
  )
}
