import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice/contactsSlice';

import css from './Contacts.module.css'

export const Contacts = ({ contacts }) => {

  const dispatch = useDispatch();

  const remove = (contactId) => {
    dispatch(removeContact(contactId));
  };
  
  return (
    <ul className={css.Contacts}>
      {contacts.map((el) => 
          <li className={css.Contact} key={el.id}>
            {el.name}: {el.number}
          <button
            className={css.DeleteBtn}
              type="button"
              onClick={() => remove(el.id)}
            >
              Delete
            </button>
          </li>
      )}
    </ul>
  )
}

Contacts.propType = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};