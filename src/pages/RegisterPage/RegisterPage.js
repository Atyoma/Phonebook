import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterPage.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.signUpBox}>
      <h1 className={s.title}>Registration</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
        <ThemeProvider theme={theme}>
          <Button type="submit" color="neutral" variant="contained">
            Create account
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
}
