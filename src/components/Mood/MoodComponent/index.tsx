import {View, Text} from 'react-native';
import React from 'react';
import {MoodIcon, MoodText, MoodWrapper} from './styles';

type RGB = ``;

interface MoodProps {
  icon: string;
  moodColor: RGB | RGBA | HEX | string;
  moodText: string;
}

const Mood = ({icon, moodColor, moodText}: MoodProps): JSX.Element => {
  return (
    <MoodWrapper>
      <MoodIcon name={icon} moodColor={moodColor} />
      <MoodText>{moodText}</MoodText>
    </MoodWrapper>
  );
};

export default Mood;
