import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Foundation';

const navBR = '10px;';
export const NavBarContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  overflow: hidden;
  background: white;
`;

export const NavBarWrapper = styled.View`
  /* background: ${({theme}) => theme.colors.AnzacYellow}; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const NavBarIconItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

interface IconProps {
  isFocused: boolean;
}

export const NavBarIcon = styled(Icon)<IconProps>`
  font-size: 25px;
  color: ${({isFocused, theme}) =>
    isFocused ? theme.colors.AnzacYellow : 'black'};
`;

export const NavBarText = styled.Text<IconProps>`
  font-size: 12px;
  color: ${({isFocused, theme}) =>
    isFocused ? theme.colors.AnzacYellow : 'black'};
  font-family: ${({theme}) => theme.fonts.openSans.bold};
  font-family: ${({isFocused, theme}) =>
    isFocused ? theme.fonts.openSans.extraBold : theme.fonts.openSans.regular};
`;
