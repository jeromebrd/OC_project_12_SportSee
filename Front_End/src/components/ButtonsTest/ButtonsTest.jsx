import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ButtonsTest.module.css';

const ButtonTest = ({ id, children }) => {
  return (
    <>
      <NavLink to={`/user/${id}`} className={styles.link}>
        {children}
      </NavLink>
    </>
  );
};

const ButtonsTest = () => {
  return (
    <div className={styles.btns}>
      <div className={styles.btns__ctn}>
        <ButtonTest id="12">Profil 12</ButtonTest>
        <ButtonTest id="18">Profil 18</ButtonTest>
        <ButtonTest id="1">Error</ButtonTest>
      </div>
    </div>
  );
};

ButtonTest.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
};

export default ButtonsTest;
