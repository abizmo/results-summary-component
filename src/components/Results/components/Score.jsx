import React from 'react';
import PropTypes from 'prop-types';

function ResultsScore({ children, max }) {
  return (
    <div className="mb-8">
      <h1 className="mb-6 tracking-wide">Your Result</h1>
      <div className="bg-gradient-to-b from-violet-blue to-persian-blue w-36 h-36 mx-auto rounded-full py-8">
        <p className="text-2xl font-extrabold mb-3">{children}</p>
        <p className="text-sm">of {max}</p>
      </div>
    </div>
  );
}

ResultsScore.propTypes = {
  children: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
};

export default ResultsScore;
