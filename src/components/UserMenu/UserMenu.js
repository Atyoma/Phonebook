import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';
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

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.userBox}>
      <span className={s.user}>User {name}</span>
      <ThemeProvider theme={theme}>
        <Button
          type="button"
          color="neutral"
          variant="contained"
          size="small"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </Button>
      </ThemeProvider>
    </div>
  );
}
