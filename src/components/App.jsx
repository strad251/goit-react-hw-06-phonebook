import { useDispatch, useSelector } from "react-redux";

import { ContactForm } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { setFilter } from "redux/contactsSlice/contactsSlice";

export const App = () => {

  const contacts = useSelector((state) => state.contacts.contacts);
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
  contact.name.trim().toLowerCase().includes(filterValue.trim().toLowerCase())
  );
  

  return (

      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
        type="text"
        value={filterValue}
        onChange={e => dispatch(setFilter(e.target.value))}
        />
        <Contacts contacts={filteredContacts} />
      </div>
    )
  }

