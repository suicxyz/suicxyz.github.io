import React, { useState } from 'react';
import bunnyLogo from '../../assets/bunny-ears.svg';

import * as S from "./style";

const HomeOverlay: React.FC = () => {
  const [reveal, setReveal] = useState<boolean>(false);

  const handleReveal = () => {
    setReveal(true);
  }

  return (<>
    <S.Container style={(reveal === true) ? { transition: "1s", top: "-100vh" } : {}}>
      <S.Image
        src={bunnyLogo}
        alt="suicxyz"
        onClick={handleReveal}
      ></S.Image>
    </S.Container>
  </>)
}

export default HomeOverlay;