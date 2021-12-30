import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
  search: '',
  isSearchVisible: false,
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
    toggleFavorite: (state, { payload: id }) => { // id это то что мы отпрааляем в (экшн(диспатч) туглфаворит)
      state.favorites = state.favorites.includes(id) // Условие
        ? state.favorites.filter((value) => value !== id) // если true
        : [...state.favorites, id]  // если false
    },
    searching: (state, { payload: search }) => {
      state.search = search;

      const filteredCards = state.startCards.filter(card => card.title.match(search)?.length || card.description.match(search)?.length);

      state.cards = filteredCards.length ? filteredCards : [{
        id: 130,
        title: 'Пусто',
        description: 'Попробуйте изменить запрос',
        img: undefined,
        filters: [],
        isEmpty: true,
      }];
    },
    showSearch: (state) => {
      state.isSearchVisible = true;
    },
    clearSearch: (state) => {
      state.search = '';
      state.isSearchVisible = false;
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

export const { toggleFavorite, searching, showSearch, clearSearch, setCards, showToast, clearToast, setFilter  } = appSlice.actions

export default appSlice.reducer