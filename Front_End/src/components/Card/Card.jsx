import PropTypes from 'prop-types';
import styles from './Card.module.css';
import caloriesIcon from '../../assets/icons/calories-icon.svg';
import proteinsIcon from '../../assets/icons/proteins-icon.svg';
import carbohydratesIcon from '../../assets/icons/carbohydrates-icon.svg';
import lipidsIcon from '../../assets/icons/lipids-icon.svg';

const Card = ({ type, data }) => {
  let title, value, icon, color;
  switch (type) {
    case 'calories':
      title = 'Calories';
      value = `${data.calorieCount}kCal`;
      icon = caloriesIcon;
      color = '#FF00001A';
      break;
    case 'proteines':
      title = 'Proteines';
      value = `${data.proteinCount}g`;
      icon = proteinsIcon;
      color = '#4AB8FF1A';
      break;
    case 'glucides':
      title = 'Glucides';
      value = `${data.carbohydrateCount}g`;
      icon = carbohydratesIcon;
      color = '#F9CE231A';
      break;
    case 'lipides':
      title = 'Lipides';
      value = `${data.lipidCount}g`;
      icon = lipidsIcon;
      color = '#FD51811A';
      break;

    default:
      break;
  }

  console.log(title, value, icon, color);
  return (
    <div className={styles.card}>
      <div className={styles.icon_ctn} style={{ background: `${color}` }}>
        <img src={icon} alt={title} />
      </div>
      <div className={styles.text_ctn}>
        <p className={styles.count_text}>{value}</p>
        <p className={styles.type_text}>{title}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      caloriesCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Card;
