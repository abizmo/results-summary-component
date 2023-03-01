import React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';

function Results({ children }) {
  return <div className="md:container md:mx-auto">{children}</div>;
}

Results.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

function ResultsHeader({ children }) {
  return (
    <header className="bg-gradient-to-b from-slate-blue to-royal-blue text-neutral-100 text-center rounded-b-3xl px-16 py-7">
      {children}
    </header>
  );
}

ResultsHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Results.Header = ResultsHeader;

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

Results.Score = ResultsScore;

function ResultsReview({ children, title }) {
  return (
    <div>
      <p className="text-lg font-bold mb-4">{title}</p>
      <p className="text-sm leading-tight">{children}</p>
    </div>
  );
}

ResultsReview.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Results.Review = ResultsReview;

function ResultsBody({ children }) {
  return <div className="p-8 grid gap-6">{children}</div>;
}

ResultsBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Results.Body = ResultsBody;

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

Results.Summary = ResultsSummary;

const container = cva(
  'flex gap-3 items-center text-sm p-4 rounded-xl bg-opacity-5',
  {
    variants: {
      color: {
        red: ['bg-primary-red'],
        yellow: ['bg-primary-yellow'],
        green: ['bg-primary-green'],
        blue: ['bg-primary-blue'],
      },
    },
  },
);

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

function ResultsSummaryItem({ category, color, icon, score }) {
  return (
    <li className="[&:not(:last-child)]:mb-4">
      <div className={container({ color })}>
        <img src={icon} alt={category} />
        <p className={text({ color })}>{category}</p>
        <p>
          {score}
          <span className="text-neutral-800 text-opacity-60"> / 100</span>
        </p>
      </div>
    </li>
  );
}

ResultsSummaryItem.propTypes = {
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

Results.SummaryItem = ResultsSummaryItem;

export default Results;
