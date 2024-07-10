import SimpleBarChart from '../BarChart/SimpleBarChart';
import styles from '../../pages/Dashboard/Dashboard.module.css';
import PropTypes from 'prop-types';

const UserActivity = ({ activityData }) => {
  const getUserActivity = activityData.data;
  const { sessions } = getUserActivity;

  return (
    <div className={styles.barChart_ctn}>
      {activityData != null && <SimpleBarChart data={sessions} />}
    </div>
  );
};
UserActivity.propTypes = {
  activityData: PropTypes.array.isRequired,
};

export default UserActivity;
