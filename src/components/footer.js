import React from 'react';
import { ReactComponent as GitHubIcon } from '../images/github.svg';

const Footer = () => {
  return (
    <div className="footerContainer">
      <a href="https://github.com/noraboamaah/budgetCalculator" target="_blank" alt="github-repo">
        <GitHubIcon className="githubIcon" />
      </a>
    </div>
  );
};

export default Footer;
