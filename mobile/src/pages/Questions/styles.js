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

export const PackagesGrid = styled.View`
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 90%;
`;

export const PackageImage = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: #ff5a00;
  font-size: 15px;
`;

export const Description = styled.Text`
  margin-left: 10px;
  color: #2e2e2e;
  font-size: 13px;
  margin-top: 10px;
  width: 80%;
`;

export const Price = styled.Text`
  margin-left: 10px;
  margin-top: 10px;
  color: #2e2e2e;
  font-size: 12px;
`;

export const PriceMiles = styled.Text`
  margin-left: 10px;
  margin-top: 10px;
  color: #ff5a00;
  font-size: 12px;
`;

export const PriceClub = styled.Text`
  margin-left: 10px;
  margin-top: 10px;
  color: #663399;
  font-size: 12px;
`;

export const DescriptionGrid = styled.View`
  width: 80%;
`;

export const TogGrid = styled.View`
  margin-top: 40px;
  display: flex;
  width: 350px;
`;

export const PriceGrid = styled.View``;

export const TouchImage = styled.TouchableHighlight``;
