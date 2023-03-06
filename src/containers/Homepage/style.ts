import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #2b2b2b;
  color: #F8F8F2;

  padding: 2.25rem;
`;

export const Title = styled.h2`
  font-size: 48px;
  backgroucolor: #F8F8F2;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  padding: 10px;
`;

export const Name = styled.h4`
  font-size: 20px;
	font-weight: 300;
	color: #F8F8F2;
	margin-bottom: 10px;
`;

export const Item = styled(Link)`
  font-size: 15px;
	text-decoration: none;
	color: #BD93F9;
  display: block;
  padding-left: 20px;

  &:hover {
    color: #6272A4;
  }
`;