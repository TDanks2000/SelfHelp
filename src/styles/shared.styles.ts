import styled from 'styled-components/native';

export const Text = styled.Text`
  color: black;
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.openSans.regular};
`;
export const MainText = styled(Text)`
  font-family: ${({theme}) => theme.fonts.openSans.bold};
  font-size: 18px;
`;

export const SubText = styled(Text)`
  color: #999999;
  font-size: 13px;
  margin-top: 1px;
`;

export const HorizontalSeprator = styled.View`
  margin: 30px;
  height: 2px;
  background-color: grey;
  opacity: 0.2;
`;
