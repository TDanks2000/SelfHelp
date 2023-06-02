import {FlatList} from 'react-native';
import React from 'react';
import {Container, Wrapper} from './RelaxingMusic.styles';
import {MainText} from '../../styles/shared.styles';
import SquareCard from '../SquareCard';

const musicItems = [
  {
    title: 'SLEEP',
    color: 'lightGreen',
  },
  {
    title: 'RELAX',
    color: 'purple',
  },
  {
    title: 'ANXIETY',
    color: 'orange',
  },
];

const RelaxingMusic = () => {
  const renderItem = (item: any, index: number) => {
    return (
      <SquareCard
        title={item.title}
        onPress={() => console.log('pressed')}
        color={item.color}
        key={`music-${index + 1}`}
      />
    );
  };

  return (
    <Container>
      <MainText>Mindful Music</MainText>
      <Wrapper>
        {musicItems.map((item, index) => renderItem(item, index))}
      </Wrapper>
    </Container>
  );
};

export default RelaxingMusic;
