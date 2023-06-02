import React from 'react';
import {
  Background,
  Container,
  HelloContainer,
  HelloText,
  TopContainer,
} from './HomeContainer.styles';
import {MoodComponent, Affirmations, RelaxingMusic} from '../../components';
import {HorizontalSeprator} from '../../styles/shared.styles';

const HomeContainer = () => {
  return (
    <Container>
      <TopContainer>
        {/* BACKGROUND */}
        <Background />

        {/* HELLO COMPONENT */}
        <HelloContainer>
          <HelloText>Hello,</HelloText>
        </HelloContainer>

        {/* MOODS */}
        <MoodComponent />
      </TopContainer>
      {/* AFFIRMATIONS */}
      <Affirmations />

      <HorizontalSeprator />

      <RelaxingMusic />
    </Container>
  );
};

export default HomeContainer;
