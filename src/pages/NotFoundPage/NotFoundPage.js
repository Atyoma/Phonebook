import { Link } from 'react-router-dom';
import s from '../../components/WelcomeMessage/Message.module.css';
export default function NotFoundPage() {
  return (
    <div className={s.notFoundPageBox}>
      <h2 className={s.title}>
        Sorry. We didn't find anything matching your search.
      </h2>
      <p className={s.title}>
        Follow the link to
        <Link to="register"> Registration </Link> or{' '}
        <Link to="login">Log in</Link>
      </p>
    </div>
  );
}
