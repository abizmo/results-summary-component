import React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';

const container = cva('flex gap-3 items-center text-sm p-4 rounded-xl bg-opacity-5', {
  variants: {
    color: {
      red: ['bg-primary-red'],
      yellow: ['bg-primary-yellow'],
      green: ['bg-primary-green'],
      blue: ['bg-primary-blue'],
    },
  },
});

const text = cva('flex-1', {
  variants: {
    color: {
      red: ['text-primary-red'],
      yellow: ['text-primary-yellow'],
      green: ['text-primary-green'],
      blue: ['text-primary-blue'],
    },
  },
});

function Category({ icon, category, score, color }) {
  return (
    <div
      className={container({ color })}
    >
      <img src={icon} alt={category} />
      <p className={text({ color })}>{category}</p>
      <p>
        {score}
        <span className="text-neutral-800 text-opacity-60"> / 100</span>
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
