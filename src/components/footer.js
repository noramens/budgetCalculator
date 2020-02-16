import React from 'react';
import { ReactComponent as GitHubIcon } from '../images/github.svg';

const Footer = () => {
  return (
    <div style={styles}>
      <GitHubIcon />
    </div>
  );
};

const styles = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  height: '20%',
  padding: '10px',
  textAlign: 'center',
  color: '#ED9568',
  fontWeight: 'bold'
};

export default Footer;
