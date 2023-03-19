import PropTypes from 'prop-types';

import { FeedbackButtons } from 'components/FeedbackOptions/FeedbackOptions.styled';


export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackButtons>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </FeedbackButtons>
  );
};


FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
