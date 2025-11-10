import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../store/filters/filters.reducer';
import { STATUS } from '../../utils/types';
import { selectCurrentStatus } from '../../store/filters/filters.selector';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector(selectCurrentStatus);

  function statusFilterHandler(e) {
    const value = e.target.value;

    dispatch(setStatusFilter(value));
  }
  return (
    <div className="my-2 flex w-full justify-between gap-2">
      {Object.values(STATUS).map((value) => (
        <label key={value} className="w-full cursor-pointer">
          <input
            className="peer sr-only w-full"
            type="radio"
            name="status"
            value={value}
            checked={currentStatus === value}
            onChange={statusFilterHandler}
          />
          <span className="inline-block w-full rounded-xl border-2 border-gray-300 p-2 transition-colors peer-checked:border-amber-500 peer-checked:bg-amber-100 hover:border-amber-300">
            {value}
          </span>
        </label>
      ))}
    </div>
  );
};

export default TodoFilters;
