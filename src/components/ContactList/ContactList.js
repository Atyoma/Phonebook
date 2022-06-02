import React from 'react';
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from '../../redux/slice';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import s from './ContactList.module.css';

function ContactList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter.value);

  const getFilteredContacts = () => {
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();
  console.log(contacts);
  return (
    <>
      {isFetching && <Loader />}
      {contacts ? (
        <ul className={s.list}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No any contacts</p>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactList;
