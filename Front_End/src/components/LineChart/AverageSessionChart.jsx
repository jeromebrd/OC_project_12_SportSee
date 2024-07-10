import PropTypes from 'prop-types';
import styles from './AverageSessionChart.module.css';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// Fonction de rendu personnalisé pour le tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.custom_tooltip} style={{}}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const AverageSessionChart = ({ data }) => {
  // Mapper les jours à leurs abréviations
  const dayMap = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const transformedSessions = data.sessions.map((session) => ({
    ...session,
    day: dayMap[session.day - 1],
  }));

  return (
    <div className={styles.average_ctn}>
      <h2>Durée moyenne des sessions</h2>
      <LineChart
        width={258}
        height={263}
        data={transformedSessions}
        // margin={{ top: 20, right: 0, left: 0, bottom: 15 }}
      >
        <XAxis
          dataKey="day"
          tickMargin={10}
          tickLine={false}
          axisLine={false}
          stroke="#fff"
          opacity={'50%'}
        />
        <YAxis domain={[0, 'dataMax + 10']} tick={false} hide={true} />
        <Tooltip content={<CustomTooltip />} />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          opacity={'50%'}
          activeDot={{ r: 4 }}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

AverageSessionChart.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
CustomTooltip.propTypes = {
  active: PropTypes.any,
  payload: PropTypes.any,
};
export default AverageSessionChart;
