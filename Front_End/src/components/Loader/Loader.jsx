import logo from '/logo-sportsee.svg';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={logo} alt="logo" />
      <p>Chargement...</p>
    </div>
  );
};

export default Loader;
