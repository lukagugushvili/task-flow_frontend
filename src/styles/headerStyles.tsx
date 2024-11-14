import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBox = styled.header`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1d232a;
  box-shadow: 2px 2px 2px 2px #1d232a;
`;

export const HeaderLogo = styled.h2`
  font-size: 25px;
  letter-spacing: 1px;
  color: #ff5861;
`;

export const Nav = styled.nav`
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledLinks = styled(Link)`
  color: #ffffff;
`;
