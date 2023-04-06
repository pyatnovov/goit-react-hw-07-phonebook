import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './Itemslice';
import { filtersReducer } from './filterslice';
const reducers = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
export const store = configureStore({
  reducer: reducers,
});
