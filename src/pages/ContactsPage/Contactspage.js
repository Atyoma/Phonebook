import Form from '../../components/Form';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import s from '../../components/ContactList/ContactList.module.css';

function ContactsPage() {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <div className={s.filterBox}>
        <Filter />
      </div>
      <div className={s.contactsBox}>
        <ContactList />
      </div>
    </div>
  );
}

export default ContactsPage;
