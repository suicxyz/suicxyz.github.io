import { Link } from "react-router-dom";
import styled from "styled-components";

import background from "../../assets/bg.jpg";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 44px);
  
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Window = styled.div`
  width: 80%;
  height: 90%;
  background-color: #1e1f1a;
  border-radius: 30px;
  box-shadow: 2px 2px 50px 10px #000000aa;
`;