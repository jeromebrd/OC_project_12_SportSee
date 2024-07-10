import AverageSessionChart from '../LineChart/AverageSessionChart';
import PropTypes from 'prop-types';

const UserSessions = ({ sessionsData }) => {
  const getAverageSession = sessionsData.data;
  console.log('getAverageSession', getAverageSession);
  return (
    <>
      {sessionsData != null && <AverageSessionChart data={getAverageSession} />}
    </>
  );
};
UserSessions.propTypes = {
  sessionsData: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};
export default UserSessions;
