import React, { useState } from "react";

import * as S from "./style";

import globe from "../../assets/globe.svg";
import buttons from "../../assets/buttons.svg";
import close from "../../assets/close.svg";
import panel from "../../assets/panel.svg";

const Span = ({ children }) => {
  console.log(children)
  return (<span>{children}</span>);
}

const Main: React.FC = () => {

  const getLines = () => {
    var text = `
# About me

Sup! I'm suicxyz, or Vinicius, it's on you
Talking about you, how you doing?

## What I do?

* Back-End Applications;
${<Span>* Node.js, TypeScript, ESLint, Babel and Jest</Span>}
* Being something that I like to call minified web dev;
* Take really good in taking really long naps.

## What I do in my free-time?

* Work on my personal projects, such as this portfolio, made in my free-time between school and work;
* Read some articles in the internet about the last news in the Dev world;
* Surf on r/Unixporn;
* I take reeeeaaally long naps.

## Why should you hire me?

1. I need money.
2. If you hire me, you will receive a gift from Santa Claus!
3. Did I already mention I have to pay my bills?
4. If you are searching for someone to hire, you can stop because you already found someone!
${<Span>(it's me in case you didn't get it)</Span>}

So... please hire me!

`;
    text = text.split("\n");
    text.shift();
    text.pop();

    return text;

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
              {getLines().map((e, i) => {
                console.log(i);
                return (<p key={Math.random()}>{(i+1)} - {e}<br/></p>)
              })}
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
