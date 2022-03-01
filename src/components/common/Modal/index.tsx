/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { iconClose } from '../../../assets/icons';
import { ModalProps } from '../../../interfaces/modal.interface';
import { Container, Typography } from '../../../styles/styles';
import Button from '../Button';
import { ModalContent, ModalWrapper } from './modal.styled';

const Modal = ({ title, children, setShowModal }: ModalProps) => {
  const styles = {
    closeModal: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      width: '50px',
      height: '50px',
      padding: '0',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    buttonClose: {
      position: 'relative',
      bottom: '-90px',
      right: '80px',
      padding: '5px 10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      fontSize: '1rem',
    },
  };

  return (
    <ModalWrapper>
      <Button style={styles.closeModal} title={iconClose} onClick={setShowModal} />
      <ModalContent style={{ position: 'relative' }}>
        <Container style={{
        }}
        >
          <Typography>
            {title}
          </Typography>
        </Container>
        {children }
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
