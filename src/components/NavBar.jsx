import React from "react";
import styled from "styled-components";
import logo from "../images/suitcase.png";

const NavBar = () => {
  return (
    <NavBarDiv>
      <NavBarContainer>
        <Logo>
          <LogoImage src={logo} />
          <LogoText>Stays</LogoText>
        </Logo>
        <NavBarItems>
          <RegisterButton>Register</RegisterButton>
          <LoginButton>Login</LoginButton>
        </NavBarItems>
      </NavBarContainer>
    </NavBarDiv>
  );
};

export default NavBar;

const NavBarDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: #faf2e9;
`;
const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: #231638;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 50px;
  padding-right: 10px;
`;
const LogoText = styled.span`
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
`;
const NavBarItems = styled.div``;
const RegisterButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  background-color: #fff8ef;
  border: 1px solid #e7a52f;
  border-radius: 4px;
  &:hover {
    border: 1px solid #fed064;
  }
`;

const LoginButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  background-color: #e7a52f;
  color: white;
  border-radius: 4px;
  border: 1px solid #e7a52f;

  &:hover {
    border: 1px solid #fed064;
  }
`;
