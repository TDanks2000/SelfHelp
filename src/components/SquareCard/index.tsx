import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Title, Wrapper} from './SquareCard.styles';

const colorTypes = {
  red: 'red',
  lightBlue: 'lightBlue',
  blue: 'blue',
  lightGreen: 'lightGreen',
  orange: 'orange',
  purple: 'purple',
};

type Color = keyof typeof colorTypes;

type Props = {
  onPress(): void;
  title: string;
  color: Color;
};

const SquareCard = ({onPress, title, color}: Props) => {
  return (
    <Container gradientColor={color}>
      <Wrapper onPress={onPress}>
        <Title>{title}</Title>
      </Wrapper>
    </Container>
  );
};

export default SquareCard;
