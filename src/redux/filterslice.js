import { createSlice } from '@reduxjs/toolkit';

const initialFilter = { filter: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilter,
  reducers: {
    setFilterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
