import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
  search: '',
  startCards: [],
  isToastVisible: false,
  toastText: '',
  filterType: undefined,
  cards: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload: id }) => { // id then what we send to (action (dispatch) togglefavorite
      state.favorites = state.favorites.includes(id) // Condition
        ? state.favorites.filter((value) => value !== id) // if true
        : [...state.favorites, id]  // if false
    },
    searching: (state, { payload: search }) => {
      state.search = search;

      const filteredCards = state.startCards.filter(card => card.title.match(search)?.length || card.description.match(search)?.length);

      state.cards = filteredCards.length ? filteredCards : [{
        id: 130,
        title: 'Пусто',
        description: 'Попробуйте изменить запрос',
        img: undefined,
        filters: '',
        isEmpty: true,
      }];
    },
    clearSearch: (state) => {
      state.search = '';
      state.cards = state.startCards;
    },
    setCards:  (state, { payload: cards }) => {
      state.startCards = cards;
      state.cards = cards;
    },
    showToast: (state, { payload: text }) => {
      state.isToastVisible = true;
      state.toastText = text;
    },
    clearToast: (state) => {
      state.isToastVisible = false;
      state.toastText = '';
    },
    setFilter: (state, { payload: filter }) => {
      state.filterType = filter;
    },
  },
})

export const { toggleFavorite, searching, clearSearch, setCards, showToast, clearToast, setFilter  } = appSlice.actions

export default appSlice.reducer