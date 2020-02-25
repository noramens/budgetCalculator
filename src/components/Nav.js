import React from 'react';
import { ReactComponent as GitHubIcon } from '../images/github.svg';
import Logo from '../images/logo.png';
import { NavContainer, GithubLogo } from '../styles/styles';

const Nav = () => {
  return (
    <NavContainer>
      <img src={Logo} width="60px" height="60px" alt="logo" />
      <p>Want to find out how much you have to spend to reach your financial goal?</p>
      <GithubLogo>
        <a href="https://github.com/noraboamaah/budgetCalculator" target="_blank" alt="github-repo">
          <GitHubIcon className="githubIcon" />
        </a>
      </GithubLogo>
    </NavContainer>
  );
};

export default Nav;
