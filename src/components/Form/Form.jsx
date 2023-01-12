
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from 'redux/contactsSlice/contactsSlice';

import css from './Form.module.css'

export const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(contact => {
      return contact.name === name;
    });
    if (isExist) {
      alert('contact already exists');
      return
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };


  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      <label
        className={css.Label}>
        Name:
        <input
          className={css.Input}
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label
        className={css.Label}>
        Number:
        <input
          className={css.Input}
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.AddBtn} type='submit'>Add contact</button>
    </form>
  )
};