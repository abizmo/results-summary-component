import React from 'react';
import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <button
      className="bg-neutral-800 text-neutral-100 tracking-wide h-14 rounded-full hover:bg-gradient-to-b hover:from-slate-blue hover:to-royal-blue"
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Button;
