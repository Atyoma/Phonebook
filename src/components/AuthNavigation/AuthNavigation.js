import s from './AuthNavigation.module.css';
import { NavLink } from 'react-router-dom';

function AuthNavigation() {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Log in
      </NavLink>
    </nav>
  );
}

export default AuthNavigation;
