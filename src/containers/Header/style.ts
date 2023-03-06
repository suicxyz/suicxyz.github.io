import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled.div`
  background: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;  
  color: #f5f5f5;
`;

export const Logo = styled.a`
  text-decoration: none;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const LogoText = styled.h2`
  font-weight: 300;
  font-style: 20px;
  color: #f5f5f5;
`;

export const Menu = styled.div``;

export const MenuLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  padding: 1rem 1.5rem;
`;
