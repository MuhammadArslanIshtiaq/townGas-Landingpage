import React from "react";
import NftForm from "../forms/NftForm";
import SubmitThankYou from "../forms/SubmitThankYou";
import PrivacyPolicy from "../forms/PrivacyPolicy";
import PrivacyPolicyEn from "../forms/PrivacyPolicyEn";
import ErrorMessage from "../forms/ErrorMessage";

import Modal from "./Modal";

const ModalComponents = (props) => {
  return (
    <>
      <Modal
        sizeClass="max-w-4xl lg:max-w-2xl"
        show={props.show === "formModal"}
        onClose={props.onClose}
      >
        <NftForm />
      </Modal>

      <Modal
        sizeClass="max-w-2xl"
        show={props.show === "SubmitThankYou"}
        onClose={props.onClose}
      >
        <SubmitThankYou />
      </Modal>

      <Modal
        sizeClass="max-w-4xl lg:max-w-2xl"
        show={props.show === "PrivacyPolicyEn"}
        onClose={props.onClose}
      >
        <PrivacyPolicyEn />
      </Modal>

      <Modal
        sizeClass="max-w-4xl lg:max-w-2xl"
        show={props.show === "PrivacyPolicy"}
        onClose={props.onClose}
      >
        <PrivacyPolicy />
      </Modal>

      <Modal
        sizeClass="max-w-2xl"
        show={props.show === "ErrorMessage"}
        onClose={props.onClose}
      >
        <ErrorMessage />
      </Modal>
    </>
  );
};

export default ModalComponents;
