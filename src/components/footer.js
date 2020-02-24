import React from 'react';
import { ReactComponent as GitHubIcon } from '../images/github.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/noraboamaah/budgetCalculator" target="_blank" alt="github-repo">
        <GitHubIcon className="githubIcon" />
      </a>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  height: 20%;
  padding: 10px;
  text-align: center;
  color: #ed9568;
  font-weight: bold;
`;

export default Footer;
