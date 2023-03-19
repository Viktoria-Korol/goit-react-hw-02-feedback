import PropTypes from 'prop-types';

import {
  FeedbackButtons,
  TitleSection
} from 'components/Section/Section.styled';


export const Section = ({ title, children }) => {
  return (
    <FeedbackButtons>
      <TitleSection>{title}</TitleSection>
      {children}
    </FeedbackButtons>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};