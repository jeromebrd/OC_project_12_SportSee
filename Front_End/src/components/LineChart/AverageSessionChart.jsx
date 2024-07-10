import PropTypes from 'prop-types';
import styles from './AverageSessionChart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Fonction de rendu personnalisé pour le tooltip
const CustomTooltip = ({ active, payload, coordinate, chartWidth }) => {
  if (active && payload && payload.length) {
    const tooltipWidth = 238 - coordinate.x;
    return (
      <div
        className={styles.custom_tooltip}
        style={{
          left: `${Math.min(coordinate.x, chartWidth - 10)}px`,
          width: `${
            tooltipWidth === 0 ? tooltipWidth + 50 : tooltipWidth + 20
          }px`,
        }}
      >
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
      <ResponsiveContainer width={258} height={263}>
        <LineChart
          width={258}
          height={263}
          data={transformedSessions}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
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
          <Tooltip
            cursor={{ stroke: 'none' }}
            content={({ active, payload, coordinate, viewBox }) => (
              <CustomTooltip
                active={active}
                payload={payload}
                coordinate={coordinate}
                chartWidth={viewBox.width}
              />
            )}
            position={{ y: 0 }}
            wrapperStyle={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            opacity={'50%'}
            activeDot={{ r: 4 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
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
  coordinate: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  chartWidth: PropTypes.number.isRequired,
};
export default AverageSessionChart;
