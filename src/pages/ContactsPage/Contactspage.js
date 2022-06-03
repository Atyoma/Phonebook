import Form from '../../components/Form';
import ContactList from '../../components/ContactList';

import s from '../../components/ContactList/ContactList.module.css';

function ContactsPage() {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
