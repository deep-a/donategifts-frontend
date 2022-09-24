import React from 'react';
import PropTypes from 'prop-types';

export default function Modal(props) {
  const ModalBody = props.body;

  return (
    <div tabIndex={-1} role="dialog" aria-hidden="true">
      <div>
        <ModalBody />
      </div>
    </div>
  );
}

Modal.propTypes = {
  body: PropTypes.element.isRequired
};
