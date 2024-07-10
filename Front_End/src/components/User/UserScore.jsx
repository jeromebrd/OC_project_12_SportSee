import AverageScoreChart from '../RadialBarChart/AverageScoreChart';
import PropTypes from 'prop-types';

const UserScore = ({ data, objectifScore }) => {
  console.log(objectifScore);
  return <>{data != null && <AverageScoreChart score={objectifScore} />}</>;
};
UserScore.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
  objectifScore: PropTypes.number.isRequired,
};
export default UserScore;
