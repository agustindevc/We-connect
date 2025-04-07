import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = ({ text, href }) => {
  return (
    <Link to={href} className="button-link">
      <button>
        {text}
      </button>
    </Link>
  );
};

export default ButtonLink;
