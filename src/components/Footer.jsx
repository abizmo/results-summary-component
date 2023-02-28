import React from 'react';
import PropTypes from 'prop-types';

function Footer({ name, url }) {
  return (
    <footer className="text-xs text-center">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className="text-primary-blue"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className="text-primary-blue" href={url}>
        {name}
      </a>
      .
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Footer;
