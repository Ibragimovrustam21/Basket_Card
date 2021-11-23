import { createSlice } from '@reduxjs/toolkit'
import strawberry from '../img/Strawberry_Render_06.jpge89070c3-1105-428d-92fa-149d34221e41Original.jpg'
import lemon from '../img/lemon_234304936 (1).jpg'
import apple from '../img/apple_158989157.jpg'
import garlic from '../img/garlic.png'
import potato from '../img/potsto.jfif'
import cucumber from '../img/concombre-hollandais-large.jpg'


const RecycleSlice = createSlice({
  name: 'recycleCard',
  initialState: {
    products: [
      {
        name: 'Apple',
        price: 21,
        img: apple,
        category: 'fruits'
      },
      {
        name: 'Garlic',
        price: 14.77,
        img: garlic,
        category: 'vegetables'
      },
      {
        name: 'Strawberry',
        price: 10.99,
        img: strawberry,
        category: 'fruits'
      },
      {
        name: 'Lemon',
        price: 16.5,
        img: lemon,
        category: 'fruits'
      },
      {
        name: 'Potato',
        price: 8.99,
        img: potato,
        category: 'vegetables'
      },
      {
        name: 'Cucumber',
        price: 10,
        img: cucumber,
        category: 'vegetables'
      }
    ],
    cardItem: [],
    productFilter: [],
    total: 0,
    bool: true,
    fltr: 'all',

  },
  reducers: {
    setCardItem(state, action) {
      const { name, price, count } = action.payload;

      state.cardItem.map(r => {
        if (r.name === name) {
          r.count = r.count + count
          r.price = r.price + price*count
          state.bool = false
        }
        return r
      })

      state.bool && state.cardItem.push({
        id: new Date().toISOString(),
        name,
        price: price * count,
        count
      })
      state.bool = true
    },

    totalPrice(state) {
      if (state.cardItem.length !== 0) {
        let prevTotal = 0
        state.cardItem.map(item => {
          return prevTotal = item.price + prevTotal
        })
        state.total = prevTotal
      } else {
        state.total = 0
      }
    },

    deleted(state, action) {
      state.cardItem = state.cardItem.filter(i => i.id !== action.payload)
    },

    filterP(state, action) {
      state.fltr = action.payload
    }
  }
})

export const { setCardItem, totalPrice, deleted, filterP } = RecycleSlice.actions

export default RecycleSlice.reducer
