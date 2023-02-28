import React from 'react';
import PropTypes from 'prop-types';

function Score({ out, of }) {
  return (
    <div className="bg-gradient-to-b from-violet-blue to-persian-blue w-36 h-36 mx-auto rounded-full py-8 mb-8">
      <p className="text-2xl font-extrabold mb-3">{out}</p>
      <p className="text-sm">of {of}</p>
    </div>
  );
}

Score.propTypes = {
  out: PropTypes.number.isRequired,
  of: PropTypes.number.isRequired,
};

export default Score;
