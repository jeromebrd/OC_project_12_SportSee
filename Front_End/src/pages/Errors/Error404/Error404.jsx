import styles from './Error404.module.css';
import { Link } from 'react-router-dom';
function Error404() {
  return (
    <main className={`${styles.main}`}>
      <div>
        <h1 className={styles.color_red}>404</h1>
        <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
        <Link to={'/'}>Retourner sur la page d&apos;accueil</Link>
      </div>
    </main>
  );
}

export default Error404;
