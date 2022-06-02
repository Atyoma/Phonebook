// import styles from './HomePage.module.css';
import { useSelector } from 'react-redux';
import WelcomeMessage from '../../components/WelcomeMessage/WelcomeMessage';
import IsLoginMessage from '../../components/WelcomeMessage/IsLoginMessage';

export default function HomePage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <IsLoginMessage /> : <WelcomeMessage />;
}
