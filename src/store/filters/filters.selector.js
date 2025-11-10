import { createSelector } from 'reselect';

const selectFiltersReducer = (state) => state.filters;

export const selectCurrentStatus = createSelector(
  [selectFiltersReducer],
  (filters) => filters.status
);
