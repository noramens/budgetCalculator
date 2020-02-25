import styled from 'styled-components';

const CalcAreaContainer = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  width: 80vw;
  min-height: 70vh;
  background-color: #1e253d;
  border-radius: 5px;
  color: #e9e9f7;
`;

const ShowResultsArea = styled.div`
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Amount = styled.div` {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 30%;
  width: 60%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  fon-size: 40px;
`;

const CalculateArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const CalculatorButton = styled.button`
  color: #050711;
  padding: 15px 25px;
  outline: none;
  border-radius: 3px;
  font-weight: bold;
  border: 0;
  margin: 15px 35px 0px 35px;
  font-size: 15px;
  cursor: pointer;
  background-color: ${props => (props.primary ? '#e57373' : '#14c488')};
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin: ${props => (props.primary ? ' 0px 0px 5px -140px' : ' 0px 0px 5px 0px')};
`;

const NavContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  height: 20%;
  padding: 10px;
  text-align: left;
  color: #eee;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const GithubLogo = styled.div`
  height: 20%;
  text-align: center;
  color: #ed9568;
  font-weight: bold;
`;

export {
  CalcAreaContainer,
  ShowResultsArea,
  Amount,
  CalculateArea,
  InputContainer,
  CalculatorButton,
  Description,
  NavContainer,
  GithubLogo
};
