import {View, Text, Alert} from 'react-native';
import React from 'react';
import {
  NavBarContainer,
  NavBarIcon,
  NavBarIconItem,
  NavBarText,
  NavBarWrapper,
} from './NavBar.styles';

const NavBar = ({currentRoute}: any) => {
  const onPress = () => {
    Alert.alert('coming soon');
  };

  return (
    <NavBarContainer>
      <NavBarWrapper>
        {/* AFFIRMATIONS */}
        <NavBarIconItem onPress={onPress}>
          <NavBarIcon name="lightbulb" isFocused={currentRoute === 'Home'} />
          <NavBarText isFocused={currentRoute === 'Home'}>
            Affirmations
          </NavBarText>
        </NavBarIconItem>

        {/* RELAX */}
        <NavBarIconItem onPress={onPress}>
          <NavBarIcon name="trees" isFocused={currentRoute === 'Relax'} />
          <NavBarText isFocused={currentRoute === 'Relax'}>Relax</NavBarText>
        </NavBarIconItem>

        {/* SAFE TALK */}
        <NavBarIconItem onPress={onPress}>
          <NavBarIcon
            name="microphone"
            isFocused={currentRoute === 'SafeTalk'}
          />
          <NavBarText isFocused={currentRoute === 'SafeTalk'}>
            Safe Talk
          </NavBarText>
        </NavBarIconItem>

        {/* SETTINGS */}
        <NavBarIconItem onPress={onPress}>
          <NavBarIcon name="widget" isFocused={currentRoute === 'Settings'} />
          <NavBarText isFocused={currentRoute === 'Settings'}>
            Settings
          </NavBarText>
        </NavBarIconItem>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
