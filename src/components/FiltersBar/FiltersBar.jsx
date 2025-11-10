import { useDispatch, useSelector } from 'react-redux';
import {
  SetPriorityFilter,
  setStatusFilter,
} from '../../store/filters/filters.reducer';
import { PRIORITY, STATUS } from '../../utils/types';
import {
  selectCurrentPriority,
  selectCurrentStatus,
} from '../../store/filters/filters.selector';
import FilterItem from './FilterItem';
import SearchBar from '../SearchBar/SearchBar';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const currentStatusValue = useSelector(selectCurrentStatus);
  const currentPriorityValue = useSelector(selectCurrentPriority);

  function statusFilterChangeHandler(e) {
    const value = e.target.value;

    dispatch(setStatusFilter(value));
  }

  function priorityFilterChangeHandler(e) {
    const value = e.target.value;

    dispatch(SetPriorityFilter(value));
  }

  return (
    <section className="my-2 flex flex-col gap-2 rounded-xl border-2 border-amber-500 p-2">
      <h2 className="text-xl font-bold">Filtering Section</h2>
      <div className="flex flex-col gap-2">
        <FilterItem
          title="Status"
          currentValue={currentStatusValue}
          filterEnumObj={STATUS}
          onInputChangeHandler={statusFilterChangeHandler}
        />
        <FilterItem
          title="Priority"
          currentValue={currentPriorityValue}
          filterEnumObj={PRIORITY}
          onInputChangeHandler={priorityFilterChangeHandler}
        />
        <SearchBar />
      </div>
    </section>
  );
};

export default TodoFilters;
