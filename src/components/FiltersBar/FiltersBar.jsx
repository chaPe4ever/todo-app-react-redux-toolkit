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
    <div className="my-2 flex w-full flex-col items-start">
      <h2>Filtering</h2>
      <div className="flex w-full flex-col gap-2">
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
      </div>
    </div>
  );
};

export default TodoFilters;
