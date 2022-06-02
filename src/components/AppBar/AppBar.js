import React from 'react';
import { useSelector } from 'react-redux';
import s from './AppBar.module.css';
import Navigation from '../../components/Navigation';
import AuthNavigation from '../../components/AuthNavigation';
import UserMenu from '../../components/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <header className={s.box}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
