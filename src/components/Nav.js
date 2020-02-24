import React from 'react';
import styled from 'styled-components';
// import Logo from '../images/github.svg';

const Nav = () => {
  return (
    <NavContainer>
      {/* <img src={Logo} width="350px" height="54px" alt="logo" /> */}
      <div>Want to find out how much you have to spend to reach your financial goal?</div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  height: 20%;
  padding: 20px;
  text-align: left;
  color: #ed9568;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

export default Nav;
