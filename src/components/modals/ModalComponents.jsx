import React from 'react';
import NftForm from '../forms/NftForm';
import SubmitThankYou from '../forms/SubmitThankYou';
import Modal from './Modal';

const ModalComponents = (props) => {
  return (
    <>
      <Modal
        sizeClass='max-w-2xl'
        show={props.show === 'formModal'}
        onClose={props.onClose}
      >
        <NftForm />
      </Modal>

      <Modal
        sizeClass='max-w-2xl'
        show={props.show === 'SubmitThankYou'}
        onClose={props.onClose}
      >
        <SubmitThankYou />
      </Modal>
    </>
  );
};

export default ModalComponents;
