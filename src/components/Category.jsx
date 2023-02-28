import React from 'react';
import PropTypes from 'prop-types';

function Category({ icon, category, score, color }) {
  return (
    <div
      className={`flex gap-3 items-center text-sm p-4 bg-primary-${color} rounded-xl bg-opacity-5`}
    >
      <img src={icon} alt={category} />
      <p className={`text-primary-${color} flex-1`}>{category}</p>
      <p>
        {score} <span className="text-neutral-800 text-opacity-60"> / 100</span>
      </p>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Category;
