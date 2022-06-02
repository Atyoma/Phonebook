import { Link } from 'react-router-dom';
import s from './Message.module.css';

export default function WelcomeMessage() {
  return (
    <h1 className={s.title}>
      Hello!
      <p>
        To create your personal phone book you need to
        <Link to="/register"> Sign Up </Link> or
        <Link to="/login"> Log in</Link>
      </p>
    </h1>
  );
}
