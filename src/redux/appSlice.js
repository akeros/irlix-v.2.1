import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload: id }) => { // id это то что мы отпрааляем в (экшн(диспатч) туглфаворит)
      state.favorites = state.favorites.includes(id) // Условие
        ? state.favorites.filter((value) => value !== id) // если true
        : [...state.favorites, id]  // если false
    }
  },
})

export const { toggleFavorite } = appSlice.actions

export default appSlice.reducer