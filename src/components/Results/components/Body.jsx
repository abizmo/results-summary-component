import React from 'react';
import PropTypes from 'prop-types';

function ResultsBody({ children }) {
  return <div className="p-8 grid gap-6">{children}</div>;
}

ResultsBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ResultsBody;
