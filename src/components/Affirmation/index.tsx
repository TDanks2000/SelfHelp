import {useContext} from 'react';
import {AffirmationWrapper, Title, Wrapper} from './Affirmation.styles';
import {ModalContext} from '../../contexts/modalContext';

interface AffirmationComponentProps {
  text: string;
  color: string;
}

const AffirmationComponent = ({text, color}: AffirmationComponentProps) => {
  const {afflimationModalProps, setAfflimationModalProps}: any =
    useContext(ModalContext);

  const onPress = () => {
    setAfflimationModalProps({
      modalVisible: !afflimationModalProps.modalVisible,
      affirmation_type:
        afflimationModalProps.affirmation_type === undefined
          ? text.replace(' ', '_').toLowerCase()
          : undefined,
      color,
    });
  };

  return (
    <AffirmationWrapper affirmationColor={color}>
      <Wrapper onPress={onPress}>
        <Title>{text}</Title>
      </Wrapper>
    </AffirmationWrapper>
  );
};

export default AffirmationComponent;
