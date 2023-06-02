import {Modal} from 'react-native';
import React, {useContext} from 'react';
import {
  AffirmationText,
  AffirmationTextContainer,
  Container,
  IconItem,
  IconItemContainer,
  Title,
  TopContainer,
  TopLeft,
  TopRight,
} from './AffirmationModal.styles';
import {ModalContext} from '../../contexts/modalContext';

const AffirmationModal = () => {
  const {afflimationModalProps, setAfflimationModalProps}: any =
    useContext(ModalContext);

  console.log(afflimationModalProps);

  const closeModal = () => {
    setAfflimationModalProps({modalVisible: false});
  };

  return (
    <Modal
      transparent={true}
      visible={afflimationModalProps.modalVisible}
      animationType="slide">
      <Container affirmationColor={afflimationModalProps.color}>
        <TopContainer>
          <TopLeft>
            <IconItemContainer onPress={closeModal}>
              <IconItem name="chevron-left" />
            </IconItemContainer>
          </TopLeft>

          <Title>
            {afflimationModalProps?.affirmation_type
              ? afflimationModalProps.affirmation_type.replace('_', ' ')
              : ''}
          </Title>

          <TopRight>
            <IconItemContainer>
              <IconItem name="heart" />
            </IconItemContainer>
            <IconItemContainer>
              <IconItem name="share-alt" />
            </IconItemContainer>
          </TopRight>
        </TopContainer>

        <AffirmationTextContainer>
          <AffirmationText>
            I am grateful for the love and support I receive in my relationship.
          </AffirmationText>
        </AffirmationTextContainer>
      </Container>
    </Modal>
  );
};

export default AffirmationModal;
