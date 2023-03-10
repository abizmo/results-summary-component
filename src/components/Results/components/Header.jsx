import React from 'react';
import PropTypes from 'prop-types';

function ResultsHeader({ children }) {
  return (
    <header className="bg-gradient-to-b from-slate-blue to-royal-blue text-neutral-100 text-center rounded-b-3xl md:rounded-3xl px-16 py-7 md:py-10">
      {children}
    </header>
  );
}

ResultsHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ResultsHeader;
