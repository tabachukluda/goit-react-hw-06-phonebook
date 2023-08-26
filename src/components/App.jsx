import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactsslice';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm'; 
import { ContactList } from './ContactList/ContactList';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store'; 
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleSubmit = contactData => {
    dispatch(addContact(contactData));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1 className={styles.phonebookTitle}>Phonebook</h1> 
          <ContactForm handleSubmit={handleSubmit} contacts={contacts} />
          <h1 className={styles.contactsTitle}>Contacts</h1> 
          <Filter filter={filter} handleChange={handleFilterChange} />
          <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;