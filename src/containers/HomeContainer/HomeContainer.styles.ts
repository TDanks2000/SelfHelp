import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TopContainer = styled.View`
  position: relative;
  width: 100%;
  height: 300px;
`;

export const Background = styled.View`
  position: absolute;

  z-index: -1;
  width: 100%;
  height: 130px;
  background-color: ${({theme}) => theme.colors.AnzacYellow};
`;

export const HelloContainer = styled.View`
  width: 100%;
  padding-top: 25px;
  padding-left: 25px;
`;

export const HelloText = styled.Text`
  color: black;
  font-size: 22px;
  font-family: ${({theme}) => theme.fonts.openSans.bold};
`;
