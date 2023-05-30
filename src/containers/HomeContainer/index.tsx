import {View, Text} from 'react-native';
import React from 'react';
import {
  Background,
  Container,
  HelloContainer,
  HelloText,
  TopContainer,
} from './HomeContainer.styles';
import {MoodComponent} from '../../components';

const HomeContainer = () => {
  return (
    <Container>
      <TopContainer>
        <HelloContainer>
          <HelloText>Hello,</HelloText>
        </HelloContainer>
        <MoodComponent />
        <Background />
      </TopContainer>
    </Container>
  );
};

export default HomeContainer;
