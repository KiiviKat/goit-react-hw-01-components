import PropTypes from 'prop-types';
import { Stat } from './Stat';
import { StatisticsSection, Title, StatsList } from './Statistics.styled';

export const Statistics = ({ stats }) => (
  <StatisticsSection>
    <Title>Upload stats</Title>
    <StatsList>
      {stats.map(stat => (
        <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </StatsList>
  </StatisticsSection>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
};
