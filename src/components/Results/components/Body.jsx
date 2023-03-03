import React from 'react';
import PropTypes from 'prop-types';

function ResultsBody({ children }) {
  return <div className="p-8 md:p-10 grid gap-6 md:gap-8">{children}</div>;
}

ResultsBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ResultsBody;
