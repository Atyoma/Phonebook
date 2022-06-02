import s from './Message.module.css';
import { Link } from 'react-router-dom';

export default function IsLoginMessage() {
  return (
    <h1 className={s.title}>
      You are authorized!{' '}
      <p>
        Go to <Link to="/contacts"> Contacts </Link>
      </p>
    </h1>
  );
}
