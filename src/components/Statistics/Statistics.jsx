import PropTypes from 'prop-types';

import {
  WrapStatistics,
  WrapTotal,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  PositivePercentage,
}) => {
  return (
    <div>
      <>Statistics</>
      <WrapStatistics>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </WrapStatistics>
      <WrapTotal>
        <p>Total: {total}</p>
        <p>Positive feedback: {PositivePercentage}%</p>
      </WrapTotal>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  PositivePercentage: PropTypes.number,
};