import styled from 'styled-components/native';
import {Text} from '../../styles/shared.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {utils} from '../../utils';

interface IProps {
  affirmationColor: string;
}

export const Container = styled(LinearGradient).attrs(
  ({affirmationColor}: IProps) => {
    const colors = utils.Gradients(affirmationColor);

    return {
      colors,
    };
  },
)<IProps>`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const TopContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopLeft = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled(Text)`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const TopRight = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IconItemContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
`;

export const IconItem = styled(Icon)`
  color: black;
  font-size: 20px;
`;

export const AffirmationTextContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  padding: 15px;
  margin-top: 10px;
`;

export const AffirmationText = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
