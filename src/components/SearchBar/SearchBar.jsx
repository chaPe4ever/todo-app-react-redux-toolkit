// SearchBar.jsx
import { useEffect, useState } from 'react';
import { useDebouncedValue } from '../../utils/hooks';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/filters/filters.reducer';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const debouncedQuery = useDebouncedValue(inputValue);

  // Dispatch when debounced value changes
  useEffect(() => {
    dispatch(setSearchQuery(debouncedQuery));
  }, [dispatch, debouncedQuery]);

  return (
    <div>
      <input
        value={inputValue}
        className="mt-5 mb-2 w-1/3 rounded-xl border-2 border-amber-500 p-2 pr-20 md:cursor-pointer"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search todos..."
      />
    </div>
  );
};

export default SearchBar;
