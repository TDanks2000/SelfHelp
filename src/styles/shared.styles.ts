import styled from 'styled-components/native';

export const Text = styled.Text`
  color: black;
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.openSans.regular};
`;
