import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../../public/logo-sportsee.svg';
import styles from './Header.module.css';
const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to={'/'}>
          <img src={logo} alt="logo sportsee" />
        </NavLink>
        {location.pathname != '/' && (
          <ul>
            <li>
              <NavLink to={'/'}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>Profil</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>Réglage</NavLink>
            </li>
            <li>
              <NavLink to={'#'}>Communauté</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
