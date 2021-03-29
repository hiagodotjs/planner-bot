import React, {useState, useEffect} from 'react';

import {
  MainGrid,
  Question,
  AnswerText,
  AnswersGrid,
  TextContainer,
  SecondMessageStyle,
} from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Submit from '../../components/Submit/Submit';
import axios from 'axios';
import DefaultInput from '../../components/DefaultInput/DefaultInpt';

const Questions = () => {
  useEffect(() => {
    getData();
  }, []);

  const [counter, setCounter] = useState(1);
  const [actualQuestion, setActual] = useState('');

  async function getData() {
    console.log('bateu aqui');
    const response = await axios.get(`http:/10.0.2.2:3000/planner/${counter}`);
    setActual(response.data);
  }

  function setCounterData() {
    if (counter <= 15) {
      console.log(counter);
      setCounter(counter + 1);
      getData();
    }
  }

  return (
    <>
      {actualQuestion ? (
        <MainGrid>
          <Question>{actualQuestion.text}</Question>
          <AnswersGrid>
            {actualQuestion?.options?.map(item => (
              <>
                <TextContainer key={counter + 1}>
                  <BouncyCheckbox style={{margin: 0}} />
                  <AnswerText>{item}</AnswerText>
                </TextContainer>
              </>
            ))}
          </AnswersGrid>
          {actualQuestion.secondMsg ? (
            <SecondMessageStyle>
              * {actualQuestion.secondMsg}
            </SecondMessageStyle>
          ) : null}
          {actualQuestion.inputType !== 'multiChoice' ? <DefaultInput /> : null}

          <Submit execute={() => setCounterData()} text="Avançar" />
        </MainGrid>
      ) : null}
    </>
  );
};

export default Questions;
