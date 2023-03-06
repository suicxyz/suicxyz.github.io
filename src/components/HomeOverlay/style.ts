import styled, { keyframes } from "styled-components";

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export const Container = styled.div`
  background: #2B2B2B;
  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;

export const Image = styled.img`
  height: 128px;
  
  padding: 1.5em;
  cursor: pointer;
  
  animation: ${floatAnimation} 3s ease-in-out infinite;
  
  will-change: filter;
  transition: filter 300ms;
  filter: drop-shadow(0 0 2em #646cffaa);
`;
