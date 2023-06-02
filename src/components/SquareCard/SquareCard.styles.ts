import styled from 'styled-components/native';
import {Text} from '../../styles/shared.styles';
import LinearGradient from 'react-native-linear-gradient';
import {utils} from '../../utils';

interface IProps {
  gradientColor: string;
}
export const Container = styled(LinearGradient).attrs(
  ({gradientColor}: IProps) => {
    const colors = utils.Gradients(gradientColor);

    return {
      colors,
    };
  },
)<IProps>`
  width: 150px;
  height: 85px;
  margin-right: 10px;
  border-radius: 15px;
  border-radius: 15px;
`;

export const Wrapper = styled.TouchableOpacity`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled(Text)`
  font-family: ${({theme}) => theme.fonts.Inconsolata.regular};
  font-size: 20px;
  letter-spacing: 5px;
  color: white;
`;
