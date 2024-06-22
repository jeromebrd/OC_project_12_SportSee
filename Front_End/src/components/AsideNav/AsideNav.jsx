import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AsideNav.module.css';
import icon1 from '../../assets/icons/icon-nav-1.svg';
import icon2 from '../../assets/icons/icon-nav-2.svg';
import icon3 from '../../assets/icons/icon-nav-3.svg';
import icon4 from '../../assets/icons/icon-nav-4.svg';

const AsideNav = ({ userId }) => {
  const url = `/user/${userId}/`;
  console.log(url);
  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>
            <Link to={''}>
              <img src={icon1} alt="icon" />
            </Link>
          </li>
          <li>
            <Link to={''}>
              <img src={icon2} alt="icon" />
            </Link>
          </li>
          <li>
            <Link to={''}>
              <img src={icon3} alt="icon" />
            </Link>
          </li>
          <li>
            <Link to={''}>
              <img src={icon4} alt="icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
};

AsideNav.propTypes = {
  userId: PropTypes.number,
};

export default AsideNav;
