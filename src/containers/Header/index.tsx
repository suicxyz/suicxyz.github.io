import React from "react";

import bunnyLogo from '../../assets/bunny-ears.svg';

import * as S from "./style";

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo href="https://github.com/suicxyz">
        <S.LogoImage src={bunnyLogo} />
        <S.LogoText>suicxyz</S.LogoText>
      </S.Logo>

      <S.Menu>
        <S.MenuLink to="#about">about me</S.MenuLink>
        <S.MenuLink to="#portfolio">portfolio</S.MenuLink>
        <S.MenuLink to="#contact">contact me</S.MenuLink>
        <S.MenuLink to="/homepage">personal homepage</S.MenuLink>
      </S.Menu>
    </S.Container>
  );
}

export default Header;