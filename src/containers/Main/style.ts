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
  border-radius: 10px;
  filter: drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.5));
`;

export const Top = styled.div`
  padding: 8px 2%;
  width: 100%;
  background-color: #121311;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 10px;
  width: 18px;
  height: 18px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
`

export const TitleBarIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export const Files = styled.div`
  width: 100%;
  height: 48px;
  background-color: #5A5B56;
  display: flex;
  align-items: flex-end;
`;

export const MenuButtons = styled.img`
  width: 72px;
  height: 48px;
`;

export const File = styled.div`
  width: 250px;
  height: 40px;
  border-bottom: 40px solid #1E1F1A;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  padding: 0 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const TabText = styled.p`
  position: relative;
  top: 16px;
  color: #ffffff;
`;

export const CloseIcon = styled.img`
  position: relative;
  top: 16px;
  width: 16px;
  height: 16px;
`;

export const Code = styled.div`
	width: 100%;  
  height: calc(100% - 120px);
  display: flex;
  overflow-y: auto;
  font-family: "Fira Code";
`;


export const Lines = styled.div`
display: none;
	padding: 20px;
	text-align: right;
	border-right: 1px dashed #53565B;;
`;

export const Line = styled.p`
	font-size: 18px;
	line-height: 24px;
	color: #B8B8B6;
`;

export const CodeText = styled.div`
	text-align: left;
	padding: 20px;
	font-size: 18px;
	line-height: 24px;
	color: #B8B8B6;
`;

export const CodeTextLine = styled.p``;

export const Bottom = styled.div`
  padding: 4px 2%;
  width: 100%;
  background-color: #999FAB;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tool = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;

export const ToolIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`;

export const Text = styled.p`
  font-weight: 500;
`;
