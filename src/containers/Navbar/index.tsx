import React, { useState } from "react";

import * as S from "./style";

import bunnyLogo from "../../assets/bunny-ears.svg";
import menuBar from "../../assets/menu-bar.svg";

const Navbar: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <S.Container>
        <S.Section>
          <S.Image src={bunnyLogo} />
          <S.Item style={{ fontWeight: 900 }} to="https://github.com/suicxyz">suicxyz</S.Item>
          <S.Item to="#about">about me</S.Item>
          <S.Item to="#portfolio">my portfolio</S.Item>
          <S.Item to="#contact">contact me</S.Item>
          <S.Item to="/homepage">my homepage</S.Item>
        </S.Section>
        <S.Section>
          <S.MenuButton src={menuBar} onClick={handleMenu}></S.MenuButton>
        </S.Section>
      </S.Container>
    </>
  );
}

export default Navbar;