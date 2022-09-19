import React, { useState } from 'react';
import Modal from '../common/Modal';
import PartnerModal from './PartnerModal';
import RegisterForm from './RegisterForm';

export default function Register(): JSX.Element {
  const [modalDisplay, setmodalDisplay] = useState(false);

  function toggleModal() {
    setmodalDisplay(!modalDisplay);
  }

  return (
    <>
      <Modal body={() => <PartnerModal toggleModal={toggleModal} />} isVisible={modalDisplay} />
      <RegisterForm toggleModal={toggleModal} modalDisplay={modalDisplay} />
    </>
  );
}
