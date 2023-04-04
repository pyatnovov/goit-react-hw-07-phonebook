import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts } from 'fetch';

const contactsList = [fetchContacts(1)];
const items = createSlice({
  name: 'items:',
  initialState: {
    item: contactsList,
    filter: '',
  },
  reducers: {
    addItem(state, action) {
      state.item = [...state.item, action.payload];
    },
    deleteItem(state, action) {
      state.item = state.item.filter(x => x.id !== action.payload);
    },
    filterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts-list',
  storage,
  whitelist: ['item'],
};

export const ItemsReducer = persistReducer(persistConfig, items.reducer);
export const { addItem, deleteItem, filterValue } = items.actions;

export const getItem = state => state.items.item;
export const getFilter = state => state.items.filter;
