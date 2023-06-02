import React from 'react';
import {
  AffirmationsContainer,
  AffirmationsWrapper,
} from './Affirmations.styles';
import {MainText, SubText} from '../../styles/shared.styles';
import AffirmationComponent from '../Affirmation';

const affirmations = [
  {
    name: 'Relationships',
    color: 'lightBlue',
  },
  {
    name: 'Self Help',
    color: 'blue',
  },
  {
    name: 'Motivation',
    color: 'lightGreen',
  },
  {
    name: 'Health',
    color: 'orange',
  },
];

const Affirmations = () => {
  return (
    <AffirmationsContainer>
      <MainText>Art of Affirmations</MainText>
      <SubText>Set positive beliefs about yourself</SubText>
      <AffirmationsWrapper>
        {affirmations.map((affirmation, index) => (
          <AffirmationComponent
            text={affirmation.name}
            color={affirmation.color}
            key={index}
          />
        ))}
      </AffirmationsWrapper>
    </AffirmationsContainer>
  );
};

export default Affirmations;
