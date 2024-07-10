import PropTypes from 'prop-types';
import styles from './AverageScoreChart.module.css';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';

const AverageScoreChart = ({ score }) => {
  // Convertir le score en pourcentage
  const percentageScore = score * 100;

  // Préparer les données pour le graphique
  const data = [
    {
      name: 'Score',
      value: percentageScore,
      fill: 'var(--red)',
    },
  ];

  console.log(data);

  return (
    <div className={styles.average_score_ctn}>
      <h3>Score</h3>
      <ResponsiveContainer width={258} height={263}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            background={{ fill: '#FFF' }}
            cornerRadius={10}
          />
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            className={styles.percentage_text}
          >
            {`${percentageScore}%`}
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className={styles.objective_text}
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default AverageScoreChart;
