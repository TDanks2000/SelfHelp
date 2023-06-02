import styled from 'styled-components/native';
import {Text} from '../../styles/shared.styles';
import LinearGradient from 'react-native-linear-gradient';
import {utils} from '../../utils';

interface IProps {
  affirmationColor: string;
}

export const AffirmationWrapper = styled(LinearGradient).attrs(
  ({affirmationColor}: IProps) => {
    const colors = utils.Gradients(affirmationColor);

    return {
      colors,
    };
  },
)<IProps>`
  width: 48%;
  height: 85px;
  border-radius: 15px;
`;

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const Title = styled(Text)`
  font-size: 15px;
  font-weight: 500;
`;
