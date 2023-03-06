import React from "react";

import * as S from "./style";

const HomePage: React.FC = () => {
  return (<>
    <S.Container>
      <S.Title>My Personal Homepage</S.Title>

      <S.Section>
        <S.Name>General</S.Name>
        <S.Item to="https://protonmail.com">Proton Mail</S.Item>
        <S.Item to="https://mail.google.com">Google Mail</S.Item>
        <S.Item to="https://youyube.com">YouTube</S.Item>
        <S.Item to="https://music.youtube.com">YouTube Music</S.Item>
        <S.Item to="https://web.whatsapp.com">Web WhatsApp</S.Item>
      </S.Section>

      <S.Section>
        <S.Name>Development</S.Name>
        <S.Item to="https://github.com/">GitHub</S.Item>
        <S.Item to="https://www.geeksforgeeks.org">GeeksforGeeks</S.Item>
        <S.Item to="https://hackmag.com">HackMag</S.Item>
        <S.Item to="https://shop.hak5.org">Hak5</S.Item>
        <S.Item to="file:///">Local files</S.Item>
      </S.Section>

      <S.Section>
        <S.Name>Design</S.Name>
        <S.Item to="https://figma.com">Figma</S.Item>
        <S.Item to="https://unsplash.com/">Unsplash</S.Item>
        <S.Item to="https://dribbble.com/">Dribble</S.Item>
      </S.Section>

      <S.Section>
        <S.Name>School</S.Name>
        <S.Item to="https://login.plurall.net">Plurall</S.Item>
        <S.Item to="https://drive.google.com">Google Drive</S.Item>
        <S.Item to="https://docs.google.com">Google Docs</S.Item>
      </S.Section>

      <S.Section>
        <S.Name>4Fun</S.Name>
        <S.Item to="https://reddit.com">Reddit</S.Item>
        <S.Item to="https://memedroid.com">MemeDroid</S.Item>
      </S.Section>
    </S.Container>
  </>);
}

export default HomePage;