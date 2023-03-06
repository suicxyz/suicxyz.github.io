import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: #1a1a1a;
  padding: 0 32px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
`;

export const MenuButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const Item = styled(Link)`
  font-size: 16px;
  color: #fafafa;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-family: "SF Pro Display";
  transition: .15s;

  &:hover {
    background-color: #1f1f1f;
  }
`;
