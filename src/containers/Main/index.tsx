import React, { useState } from "react";

import * as S from "./style";

import globe from "../../assets/globe.svg";
import buttons from "../../assets/buttons.svg";
import close from "../../assets/close.svg";
import panel from "../../assets/panel.svg";

const Main: React.FC = () => {

  const getLines = () => {
    console.log(31);
  };

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
            <S.Lines>
              {[...Array(30)].map((x, i) =>
                <S.Line key={i}>{i + 1}</S.Line>
              )}
            </S.Lines>
            <S.CodeText>
              <S.CodeTextLine>
                # About me
                <br/><br/>
                Sup! I'm suicxyz, or Vinicius, it's on you!<br/>
                Talking about you, how you doing?<br/>
                <br/><br/>
                ## What I do?
                <br/><br/>
                * Back-End Applications;<br/>
                <span style={{ marginLeft: "20px" }}>* Node.js, TypeScript, ESLint, Babel and Jest<br/></span>
                * Being something that I like to call minified web dev;<br/>
                * Really good in taking really long naps. (in my city)<br/>
                <br/><br/>

                ## What I do in my free-time?
                <br/><br/>
                * Work on my personal projects, such as this portfolio, made in my free-time between school and work;<br/>
                * Read some articles in the internet about the last news in the Dev world;<br/>
                * Surf on r/Unixporn;<br/>
                * I take reeeeaaally long naps.<br/>
                <br/><br/>
                ## Why should you hire me?
                <br/><br/>
                1. I need money.<br/>
                2. If you hire me, you will receive a gift from Santa Claus!<br/>
                3. Have I already mentioned I need to pay my bills?<br/>
                4. If you are searching for someone to hire, you can stop because you already found someone!<br/>
                <span style={{ marginLeft: "20px" }}>(it's me in case you didn't get it)<br/></span>

                <br/>
                So... please hire me!
                <br/><br/>
              </S.CodeTextLine>
            </S.CodeText>
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
