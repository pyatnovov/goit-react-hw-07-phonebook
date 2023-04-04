import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getItem, getFilter } from '../../redux/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItem);
  const filter = useSelector(getFilter);

  function ItemsFilter() {
    if (filter === '') {
      return false;
    }
    return items.filter(x => x.name.toLowerCase().includes(filter));
  }
  const filtration = ItemsFilter();
  const list = filtration ? filtration : items;
  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            name={id}
            onClick={e => dispatch(deleteItem(e.target.name))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
