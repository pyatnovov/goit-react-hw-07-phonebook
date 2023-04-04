import { useSelector, useDispatch } from 'react-redux';
import { filterValue, getFilter } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <label>Find contacts by Name </label>
      <input
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={e => dispatch(filterValue(e.target.value.toLowerCase()))}
      />
    </div>
  );
};
