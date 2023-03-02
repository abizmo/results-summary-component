import React from 'react';
import PropTypes from 'prop-types';

function ResultsScore({ children, max }) {
  return (
    <div className="mb-8">
      <h1 className="mb-6 md:mb-10 tracking-wide md:text-lg">Your Result</h1>
      <div className="bg-gradient-to-b from-violet-blue to-persian-blue w-36 md:w-52 aspect-square mx-auto rounded-full py-8 md:py-14">
        <p className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-2">{children}</p>
        <p className="text-sm md:text-base">of {max}</p>
      </div>
    </div>
  );
}

ResultsScore.propTypes = {
  children: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
};

export default ResultsScore;
