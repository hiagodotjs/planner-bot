import styled from 'styled-components/native';

export const MainGrid = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const AnswersGrid = styled.View`
  margin-bottom: 10%;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  width: 90%;
  margin-right: 10%;
`;

export const Question = styled.Text`
  color: #ff5a00;
  margin-top: 30%;
  font-size: 15px;
  font-weight: bold;
  width: 90%;
  text-align: center;
`;

export const AnswerText = styled.Text`
  color: #ff5a00;
  font-size: 13px;
`;

export const TextContainer = styled.View`
  padding: 15px;
  display: flex;
  flex-direction: row;
`;

export const SecondMessageStyle = styled.Text`
  color: #696969;
`;
