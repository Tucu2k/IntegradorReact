import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {} // id: { product, quantity }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
      const p = action.payload
      const cur = state.items[p.id]
      if(cur){
        cur.quantity += 1
      } else {
        state.items[p.id] = { product: p, quantity: 1 }
      }
    },
    removeFromCart(state, action){
      const id = action.payload
      delete state.items[id]
    },
    changeQuantity(state, action){
      const { id, qty } = action.payload
      if(state.items[id]) state.items[id].quantity = qty
    },
    clearCart(state){
      state.items = {}
    }
  }
})

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
