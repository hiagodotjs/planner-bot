import React, {useState} from 'react';

import StartBtn from '../../components/StartBtn/StartBtn';

import {
  MainGrid,
  TextTemplate,
  ImageView,
  ImageContainer,
  CpfINput,
} from './styles';
import milesImg from '../../assets/miles.png';
import Questions from '../Questions/questions';

const Main = () => {
  const [isVisible, setVisible] = useState(true);
  const [hasStart, setStarted] = useState(false);

  function setHide() {
    setStarted(started => !started);
  }

  return (
    <>
      {!hasStart ? (
        <MainGrid>
          <ImageView>
            {isVisible ? <ImageContainer source={milesImg} /> : null}
          </ImageView>
          <TextTemplate>
            Olá, meu nome é Miles, seu concierge virtual, estou aqui para
            planejar sua viagem, por favor digite seu CPF para iniciarmos
          </TextTemplate>
          <CpfINput onPressIn={() => setVisible(false)} name="documentId" />

          <StartBtn hide={() => setHide()} textArea="Inicar" />
        </MainGrid>
      ) : null}
      {hasStart ? <Questions /> : null}
    </>
  );
};

export default Main;
