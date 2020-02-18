import React from 'react';
import Logo from '../images/kudiforpocket.png';

const Nav = () => {
  return (
    <div className="navContainer ">
      <img src={Logo} width="180px" height="25px" alt="logo" />
      <div>Want to find out how much you have to spend to reach your financial goal?</div>
    </div>
  );
};

export default Nav;
