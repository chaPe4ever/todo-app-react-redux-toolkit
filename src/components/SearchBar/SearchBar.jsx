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
        onChange={(e) => setInputValue(e.target.value)}
        className="my-2 rounded-xl border-2 p-2 pr-20"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
