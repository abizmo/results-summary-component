import React from 'react';
import PropTypes from 'prop-types';

import {
  ResultsBody,
  ResultsHeader,
  ResultsReview,
  ResultsScore,
  ResultsSummary,
  ResultsSummaryItem,
} from './components';

function Results({ children }) {
  return <div className="md:container md:mx-auto h-full md:h-auto md:grid md:grid-cols-2 md:rounded-3xl md:overflow-hidden md:shadow-xl">{children}</div>;
}

Results.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Results.Header = ResultsHeader;
Results.Score = ResultsScore;
Results.Review = ResultsReview;
Results.Body = ResultsBody;
Results.Summary = ResultsSummary;
Results.SummaryItem = ResultsSummaryItem;

export default Results;
