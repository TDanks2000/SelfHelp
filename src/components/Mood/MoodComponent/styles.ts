import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from '../../../styles/shared.styles';

export const MoodWrapper = styled.TouchableOpacity`
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

interface MoodIconProps {
  moodColor?: string;
}

export const MoodIcon = styled(Icon)<MoodIconProps>`
  font-size: 24px;
  color: ${({moodColor, theme}) => moodColor ?? 'black'};
`;

export const MoodText = styled(Text)`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.openSans.semiBold};
`;
