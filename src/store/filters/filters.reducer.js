import { createSlice } from '@reduxjs/toolkit';
import { PRIORITY, STATUS } from '../../utils/types';

const INITIAL_STATE = {
  status: STATUS.ALL,
  category: null,
  searchQuery: '',
  priority: PRIORITY.MEDIUM,
};

export const filtersSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setCategoryFilter(state, action) {
      state.category = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    SetPriorityFilter(state, action) {
      state.priority = action.payload;
    },
  },
});

export const {
  setStatusFilter,
  setCategoryFilter,
  setSearchQuery,
  SetPriorityFilter,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
