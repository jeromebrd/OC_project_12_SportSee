import PropTypes from 'prop-types';
import styles from './SimpleBarChart.module.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Fonction de rendu personnalisé pour le tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${styles.custom_tooltip}`}>
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

const SimpleBarChart = ({ data }) => {
  const transformedSessions = data.map((data) => ({
    ...data,
    day: new Date(data.day).getDate(),
  }));
  // récupérer le poids de l'utilisateur. Pas de doublons, un poids enregistré 1 fois.
  const allWeight = [
    ...new Set(transformedSessions.map((session) => session.kilogram)),
  ];
  // Calculer les valeurs minimales et maximales pour les poids
  const minWeight = Math.min(...allWeight);
  const maxWeight = Math.max(...allWeight);

  // Calculer la médiane des poids
  const sortedWeights = [...allWeight].sort((a, b) => a - b);
  const medianWeight =
    sortedWeights.length % 2 === 0
      ? Math.round(
          (sortedWeights[sortedWeights.length / 2 - 1] +
            sortedWeights[sortedWeights.length / 2]) /
            2
        )
      : sortedWeights[Math.floor(sortedWeights.length / 2)];

  console.log(sortedWeights);

  // Générer les ticks pour les poids uniques avec minWeight - 1 et maxWeight + 1
  const weightTicks = [minWeight - 1, medianWeight, maxWeight + 1];

  console.log(transformedSessions);
  return (
    <ResponsiveContainer width={800} height={300}>
      <BarChart
        data={transformedSessions}
        margin={{ top: 20, right: 30, left: 20, bottom: 15 }}
        barGap={8}
      >
        <CartesianGrid
          strokeDasharray="3 2"
          vertical={false}
          horizontal={false}
        />
        <XAxis
          dataKey="day"
          label={{
            offset: -10,
          }}
          tickMargin={20}
          tickLine={false}
        />
        <YAxis
          dataKey={'calories'}
          type="number"
          domain={[0, 'dataMax + 100']}
          yAxisId="left"
          orientation="left"
          interval={'equidistantPreserveStart'}
          tick={false}
          hide={true}
        />
        <YAxis
          dataKey={'kilogram'}
          type="number"
          domain={['dataMin', 'dataMax + 1']}
          yAxisId="right"
          orientation="right"
          interval={'equidistantPreserveStart'}
          ticks={weightTicks}
          tickMargin={20}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={7}
          wrapperStyle={{ paddingBottom: '20px' }}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282D30"
          name="Poids (kg)"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          name="Calories brûlées (kCal)"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

SimpleBarChart.propTypes = {
  data: PropTypes.array,
};
CustomTooltip.propTypes = {
  active: PropTypes.any,
  payload: PropTypes.any,
};
export default SimpleBarChart;
