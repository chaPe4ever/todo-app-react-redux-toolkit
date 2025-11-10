const FilterItem = ({
  title,
  currentValue,
  filterEnumObj,
  onInputChangeHandler,
}) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h3>{title}</h3>
      <div className="flex w-full justify-between gap-2">
        {Object.entries(filterEnumObj).map(([key, value]) => (
          <label key={key} className="w-full cursor-pointer">
            <input
              className="peer sr-only w-full"
              type="radio"
              name={title}
              value={value}
              checked={currentValue === value}
              onChange={onInputChangeHandler}
            />
            <span className="inline-block w-full rounded-xl border-2 border-gray-300 p-2 transition-colors peer-checked:border-amber-500 peer-checked:bg-amber-100 hover:border-amber-300">
              {value}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterItem;
