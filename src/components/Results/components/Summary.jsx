import React from 'react';
import PropTypes from 'prop-types';

function ResultsSummary({ children }) {
  return (
    <>
      <h3 className="font-bold">Summary</h3>
      <ul>{children}</ul>
    </>
  );
}

ResultsSummary.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ResultsSummary;
