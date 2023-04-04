import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, filterValue, getItem } from '../../redux/slice';

const STATE = {
  name: '',
  number: '',
};
export const ContactForm = () => {
  const [{ name, number }, setState] = useState(STATE);
  const dispatch = useDispatch();
  const items = useSelector(getItem);

  const onChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const formSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (items.some(x => x.name === newContact.name)) {
      alert(`${newContact.name} вже у списку`);
      return;
    }
    dispatch(addItem(newContact));
    dispatch(filterValue(''));

    setState({ ...STATE });
  };

  return (
    <form onSubmit={formSubmit}>
      <label>Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={onChange}
      />
      <label>Number </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={onChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
