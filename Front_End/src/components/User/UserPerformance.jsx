import ActivityRadarChart from '../RadarChart/ActivityRadarChart';
import PropTypes from 'prop-types';

const UserPerformance = ({ performanceData }) => {
  const getUserPerf = performanceData.data;
  console.log(performanceData);
  return (
    <>{performanceData != null && <ActivityRadarChart data={getUserPerf} />}</>
  );
};
UserPerformance.propTypes = {
  performanceData: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};
export default UserPerformance;
