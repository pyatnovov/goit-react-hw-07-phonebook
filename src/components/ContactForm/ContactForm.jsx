import { addContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.name.value;
    const phone = event.target.number.value;
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} вже в книзі контакті`);
    }
    form.reset();
    dispatch(addContact({ name, phone }));
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
      />
      <label>Number </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
