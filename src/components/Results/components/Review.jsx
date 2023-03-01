import React from 'react';
import PropTypes from 'prop-types';

function ResultsReview({ children, title }) {
  return (
    <div>
      <p className="text-lg font-bold mb-4">{title}</p>
      <p className="text-sm leading-tight">{children}</p>
    </div>
  );
}

ResultsReview.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ResultsReview;
