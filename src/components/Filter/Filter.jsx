import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/filterslice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilterContacts(e.target.value));
  };

  return (
    <div>
      <label>Find contacts by Name </label>
      <input
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={handleChange}
      />
    </div>
  );
};
