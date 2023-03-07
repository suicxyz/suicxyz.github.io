import React, { useState } from "react";

import * as S from "./style";

import globe from "../../assets/globe.svg";
import buttons from "../../assets/buttons.svg";
import close from "../../assets/close.svg";
import panel from "../../assets/panel.svg";

const Main: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.Window>
          <S.Top>
            <S.ButtonWrapper>
              <S.Button color="#E54949"></S.Button>
              <S.Button color="#E2B420"></S.Button>
              <S.Button color="#57B04A"></S.Button>
            </S.ButtonWrapper>
            <S.Title style={{ display: "flex", alignItems: "center" }}>
              <S.TitleBarIcon src={globe}></S.TitleBarIcon>
              Website.suicxyz-portfolio
            </S.Title>
            <div style={{ width: "78px" }}></div>
          </S.Top>
          <S.Files>
            <S.MenuButtons src={buttons}></S.MenuButtons>
            <S.File>
              <S.TabText>README.md</S.TabText>
              <S.CloseIcon src={close}></S.CloseIcon>
            </S.File>
          </S.Files>
          <S.Code>

          </S.Code>
          <S.Bottom>
            <S.Tool>
              <S.ToolIcon src={panel}></S.ToolIcon>
              Made with love using React and Typescript (and Vite, of course).
            </S.Tool>
            <S.Info>
              <S.Text>Tab Size: 2</S.Text>
              <S.Text>Markdown</S.Text>
            </S.Info>
          </S.Bottom>
        </S.Window>
      </S.Container>
    </>
  );
}

export default Main;