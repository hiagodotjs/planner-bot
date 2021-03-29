import React, {useState, useEffect} from 'react';

import {
  MainGrid,
  Question,
  AnswerText,
  AnswersGrid,
  TextContainer,
  SecondMessageStyle,
  PackagesGrid,
  PackageImage,
  TogGrid,
  Title,
  DescriptionGrid,
  Description,
  Price,
  PriceGrid,
  PriceMiles,
  TouchImage,
  PriceClub,
} from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Submit from '../../components/Submit/Submit';
import axios from 'axios';
import DefaultInput from '../../components/DefaultInput/DefaultInpt';
import {Data, OptionsData} from '../../helpers/places.js';

const Questions = props => {
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
    } else {
      props.setMiles();
      props.finish();
    }
  }

  function toNextPage() {
    if (counter === 13) {
      setCounterData();
    }
  }

  return (
    <>
      {actualQuestion ? (
        <MainGrid>
          <Question>{actualQuestion.text}</Question>
          {counter === 13 ? (
            <TogGrid>
              {Data.packages.map(item => (
                <>
                  <PackagesGrid>
                    <TouchImage onPress={() => toNextPage()}>
                      <PackageImage source={item.source} />
                    </TouchImage>
                    <DescriptionGrid>
                      <Title>{item.name}</Title>
                      <Description>{item.description}</Description>
                      <PriceGrid>
                        <Price>Em Dinheiro: R$ {item.prices.money}</Price>
                        <PriceMiles>
                          Apenas Milhas: {item.prices.miles} milhas
                        </PriceMiles>
                        <PriceClub>
                          Clube Smiles: R$ {item.prices.club}
                        </PriceClub>
                      </PriceGrid>
                    </DescriptionGrid>
                  </PackagesGrid>
                </>
              ))}
            </TogGrid>
          ) : null}
          {counter === 15 ? (
            <>
              {OptionsData.plusOptions.map(item => (
                <PackagesGrid>
                  <TouchImage onPress={() => toNextPage()}>
                    <PackageImage source={item.source} />
                  </TouchImage>
                  <DescriptionGrid>
                    <Description>{item.description}</Description>
                    <PriceGrid>
                      <Price>R$ {item.price}</Price>
                    </PriceGrid>
                  </DescriptionGrid>
                </PackagesGrid>
              ))}
            </>
          ) : null}
          <AnswersGrid>
            {actualQuestion?.options?.map(item => (
              <>
                <TextContainer key={counter + 1}>
                  <BouncyCheckbox
                    onPress={() => toNextPage()}
                    style={{margin: 0}}
                  />
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
