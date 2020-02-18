import React from 'react';
import Logo from '../images/kudiforpocket.png';

const Nav = () => {
  return (
    <div style={styles}>
      <img src={Logo} width="180px" height="25px" alt="logo" />
      <div>Want to find out how much you have to spend to reach your financial goal?</div>
    </div>
  );
};

const styles = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  height: '20%',
  padding: '20px',
  textAlign: 'left',
  color: '#ED9568',
  fontWeight: 'bold',
  fontSize: '20px',
  display: 'flex',
  justifyContent: 'space-between'
};

export default Nav;
