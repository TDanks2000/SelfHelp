import React from 'react';
import {
  MainText,
  MoodContainer,
  MoodSeperator,
  MoodsContainer,
  SubText,
} from './Mood.styles';
import Mood from './MoodComponent';

const moods = [
  {
    icon: 'smile',
    moodColor: 'green',
    moodText: 'Happy',
  },
  {
    icon: 'angry',
    moodColor: 'red',
    moodText: 'Angry',
  },
  {
    icon: 'sad-tear',
    moodColor: 'grey',
    moodText: 'Sad',
  },
  {
    icon: 'moon',
    moodColor: 'yellow',
    moodText: 'Gloomy',
  },
];

const MoodComponent = () => {
  return (
    <MoodContainer>
      <MainText>How do you feel today?</MainText>
      <SubText>Scroll to find your emotion</SubText>
      <MoodsContainer>
        {moods
          .map<React.ReactNode>((mood, index) => {
            return (
              <Mood
                icon={mood.icon}
                moodColor={mood.moodColor}
                moodText={mood.moodText}
                key={index}
              />
            );
          })
          .reduce((prev, curr) => [
            prev,
            <MoodSeperator key={Math.random()} />,
            curr,
          ])}
      </MoodsContainer>
    </MoodContainer>
  );
};

export default MoodComponent;
