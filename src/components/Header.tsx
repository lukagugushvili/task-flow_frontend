import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderBox,
  HeaderLogo,
  Nav,
  StyledLinks,
} from "../styles/headerStyles";

const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogo>FSD</HeaderLogo>
      <Nav>
        <ul>
          <li>
            <p>
              <StyledLinks to="/profile">Profile</StyledLinks>
            </p>
          </li>
          <li>
            <p>
              <StyledLinks to="/Login">Login</StyledLinks>
            </p>
          </li>
          <li>
            <p>
              <StyledLinks to="/Register">Register</StyledLinks>
            </p>
          </li>
        </ul>
      </Nav>
    </HeaderBox>
  );
};

export default Header;
