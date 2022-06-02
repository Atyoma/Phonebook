import { useState } from 'react';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../../redux/slice';
import PropTypes from 'prop-types';
import s from './Form.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const changeInputName = event => {
    setName(event.currentTarget.value);
  };

  const changeInputNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const formSubmit = event => {
    event.preventDefault();

    const data = { name, number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.warning(`${name} is already in contacts`);
      reset();
      return;
    }
    if (
      contacts.find(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      toast.warning(`Phone ${number} is already in contacts`);
      reset();
      return;
    }
    createContact(data);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.formBox}>
      <form onSubmit={formSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={changeInputName}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={changeInputNumber}
            className={s.input}
          />
        </label>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            color="neutral"
            variant="contained"
            disabled={isLoading}
          >
            Add contact
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Form;
