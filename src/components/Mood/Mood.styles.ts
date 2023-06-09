import styled from 'styled-components/native';
import {Text} from '../../styles/shared.styles';

export const MoodContainer = styled.View`
  margin: 20px 25px;
  padding: 25px 15px;
  border-radius: 8px;
  background-color: white;
`;

export const MoodsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    gap: 20,
  },
})`
  margin-top: 22px;
`;

export const MoodsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MoodSeperator = styled.View`
  width: 2px;
  height: 100%;
  background: grey;
  opacity: 0.2;
`;
