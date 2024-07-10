import PropTypes from 'prop-types';
import styles from './ActivityRadarChart.module.css';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Fonction de rendu personnalisé pour le tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.custom_tooltip}>
        <p>{`${payload[0].payload.kind}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ActivityRadarChart = ({ data }) => {
  // Transformer les données pour le radar chart
  const transformedData = data.data.map((item) => ({
    kind: data.kind[item.kind],
    value: item.value,
  }));

  return (
    <div className={styles.radarchart_ctn}>
      <ResponsiveContainer width={258} height={263}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={transformedData}
          margin={{ top: 0, bottom: 0, right: 45, left: 30 }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontSize: 12,
              fill: '#FFFFFF',
              fontWeight: 500,
            }}
            tickFormatter={(value) =>
              value.charAt(0).toUpperCase() + value.slice(1)
            }
          />
          <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Activité"
            dataKey="value"
            stroke={'var(--red)'}
            fill={'var(--red)'}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityRadarChart.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.array,
    userId: PropTypes.number.isRequired,
    kind: PropTypes.object,
  }).isRequired,
};
CustomTooltip.propTypes = {
  active: PropTypes.any,
  payload: PropTypes.any,
};
export default ActivityRadarChart;
